import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';

import './MainPage.css';
import { Button } from '@mui/material';

export default function ContactInfo() {

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [telegram, setTelegram] = useState('');
    const [message, setMessage] = useState('');

    /*const NameEntryRef = React.useRef();
    const EmailEntryRef = React.useRef();
    const PhoneEntryRef = React.useRef();
    const TelegramEntryRef = React.useRef();
    const MessageEntryRef = React.useRef();
    const EntryRefList = [NameEntryRef, EmailEntryRef, PhoneEntryRef, TelegramEntryRef, MessageEntryRef];*/

    const [NameEntryError, setNameEntryError] = useState(false);
    const [EmailEntryError, setEmailEntryError] = useState(false);
    const [PhoneEntryError, setPhoneEntryError] = useState(false);

    async function SendButtonClicked(e) {
        e.preventDefault(); //prevent page refresh

        if (!validateUserData()) return;

        setNameEntryError(false); setEmailEntryError(false); setPhoneEntryError(false);

        //TODO encrypt data implementation

        const data = { name, email, phoneNumber, telegram, message };
        setButtonDisabled(true);


        console.log(data)
        fetch('http://localhost:8080/connectWithUs/send', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => {
                console.log("HTTP status code:", response.status);

                if (response.ok) {
                    console.log("New Student added");
                    alert("New Student added successfully");
                }
                else {
                    throw new Error('HTTP error, status = ' + response.status);

                }
            })
            .catch((error) => {
                console.error('Fetch failed:', error);
                alert('Failed to add new student');
                setButtonDisabled(false); // re-enable the button if the request failed
            });
    }

    function validateUserData() {
        let state = true;
        if (name === '' || name.length < 2 || name.length > 30) {
            alert("Name is required and must be between 2 and 30 characters");
            setNameEntryError(true);
            state = false;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Valid Email is required");
            setEmailEntryError(true);
            state = false;
        }
        const phoneRegex = /^\+[0-9]{10,15}$/;
        if (!phoneRegex.test(phoneNumber) && phoneNumber !== '') { //phone number is optional, but we will check it if it is entered
            alert("Valid Phone Number is required");
            setPhoneEntryError(true);
            state = false;
        }
        return state;
    }

    return (
        <Grid container id="contacts" >
            <Grid item xs={12} sm={6}>
                <Box sx={{ width: '100%' }}>
                    <Box className='contact-info' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className='contact-title'> ЗАЛИШИЛИСЬ ПИТАННЯ?</h2>
                        <p className='contact-text'>Напишіть нам повідомлення. Наш менеджер відповість вам протягом робочого дня.</p>
                        <Button href='https://www.instagram.com/bridge_to_usa/'
                            target='_blank'
                            className='contact-social-button'
                            rel='noopener'
                            startIcon={<InstagramIcon />}
                            style={{ fontSize: '150%', borderRadius: '20px', border: '2px solid purple' }}>
                            Instagram
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ width: '100%' }}>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className='contact-form'
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="NameEntry"
                                    error={NameEntryError}
                                    placeholder="Ім'я та Прізвище"
                                    helperText="ІМ'Я"
                                    className='contact-form-input'
                                    FormHelperTextProps={{ className: 'helper-text' }}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                //inputRef={NameEntryRef}
                                />
                                <TextField
                                    id="EmailEntry"
                                    error={EmailEntryError}
                                    placeholder="example@email.com"
                                    helperText="EMAIL"
                                    className='contact-form-input'
                                    FormHelperTextProps={{ className: 'helper-text' }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                //inputRef={EmailEntryRef}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="PhoneEntry"
                                    error={PhoneEntryError}
                                    placeholder="+380555555555"
                                    helperText="НОМЕР ТЕЛЕФОНУ"
                                    className='contact-form-input'
                                    FormHelperTextProps={{ className: 'helper-text' }}
                                    value={phoneNumber}
                                    onChange={(e) => setPhone(e.target.value)}
                                //inputRef={PhoneEntryRef}
                                />
                                <TextField
                                    id="TelegramEntry"
                                    placeholder="example"
                                    helperText="ТЕЛЕГРАМ"
                                    className='contact-form-input'
                                    FormHelperTextProps={{ className: 'helper-text' }}
                                    value={telegram}
                                    onChange={(e) => setTelegram(e.target.value)}
                                //inputRef={TelegramEntryRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="MessageEntry"
                                    placeholder="Ваше повідомлення..."
                                    helperText="ВАШЕ ПОВІДОМЛЕННЯ"
                                    className='contact-form-input-textarea'
                                    FormHelperTextProps={{ className: 'helper-textarea' }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                //inputRef={MessageEntryRef}
                                />
                            </Grid>
                        </Grid>
                        <button className='contact-form-button' onClick={SendButtonClicked} disabled={isButtonDisabled}>ВІДПРАВИТИ</button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}