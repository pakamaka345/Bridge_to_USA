import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';

import './MainPage.css';
import { Button } from '@mui/material';

export default function ContactInfo() {
    return (
        <Grid container id="contacts" >
            <Grid item xs={12} sm={6}>
                <Box sx={{ width: '100%' }}>
                    <Box className='contact-info'>
                        <h2 className='contact-title'> ЗАЛИШИЛИСЬ ПИТАННЯ?</h2>
                        <p className='contact-text'>Напишіть нам повідомлення. Наш менеджер відповість вам протягом робочого дня.</p>
                        <Button href='https://www.instagram.com/bridge_to_usa/'
                            target='_blank'
                            className='contact-social-button'
                            rel='noopener'
                            startIcon={<InstagramIcon />}
                            style={{ fontSize: '30px' }}>
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
                                    id="outlined-helperText"
                                    placeholder="Ім'я та Прізвище"
                                    helperText="ІМ'Я"
                                    className='contact-form-input'
                                    FormHelperTextProps={{ className: 'helper-text' }}
                                />
                                <TextField
                                    id="outlined-helperText"
                                    placeholder="example@email.com"
                                    helperText="EMAIL"
                                    className='contact-form-input'
                                    FormHelperTextProps={{ className: 'helper-text' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-helperText"
                                    placeholder="+380555555555"
                                    helperText="НОМЕР ТЕЛЕФОНУ"
                                    className='contact-form-input'
                                    FormHelperTextProps={{ className: 'helper-text' }}
                                />
                                <TextField
                                    id="outlined-helperText"
                                    placeholder="example"
                                    helperText="ТЕЛЕГРАМ"
                                    className='contact-form-input'
                                    FormHelperTextProps={{ className: 'helper-text' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-helperText"
                                    placeholder="Ваше повідомлення..."
                                    helperText="ВАШЕ ПОВІДОМЛЕННЯ"
                                    className='contact-form-input-textarea'
                                    FormHelperTextProps={{ className: 'helper-textarea' }}
                                />
                            </Grid>
                        </Grid>
                        <button className='contact-form-button'>ВІДПРАВИТИ</button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}