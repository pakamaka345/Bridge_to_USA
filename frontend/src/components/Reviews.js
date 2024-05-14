import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function Reviews() {
    const images = [
        "images/review1.jpg",
        "images/review2.jpg",
        "images/review3.jpg",
        "images/review4.jpg",
        "images/review5.jpg"
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // breakpoint from where the settings should apply
                settings: {
                    slidesToShow: 1, // show only 1 slide in screens smaller than 768px
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Card style={{ marginTop: "10%", marginBottom: "4%", backgroundColor: "inherit" }} id = "reviews">
            <CardContent>
                <Typography variant="h5" component="h2" style={{ marginBottom: '10%', marginTop: '5%', backgroundColor: "purple", color: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", padding: "2% 2%"}}>
                    ВІДГУКИ
                </Typography>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} style={{ padding: "0 1%", textAlign: "center" }}>
                            <div style={{ border: "2px solid purple", borderRadius: "20px", overflow: "hidden", marginBottom: "1%", marginLeft: "2%", marginRight: "2%"}}>
                                <img
                                    src={image}
                                    alt="Review"
                                    style={{ width: "100%", height: "50vh", objectFit: "cover", objectPosition: "bottom" }}
                                />
                            </div>
                            <div style={{ height: "1%", backgroundColor: "white" }} />
                        </div>
                    ))}
                </Slider>
                <Button
                    variant="contained"
                    color="primary"
                    href="https://www.instagram.com/bridge_to_usa/"
                    target="_blank"
                    style={{ marginBottom: "3%", marginTop: "10%", backgroundColor: "purple", borderRadius: "30px", padding: "1% 30%", fontSize: "200%"}}
                >
                    БІЛЬШЕ ВІДГУКІВ
                </Button>
            </CardContent>
        </Card>
    );
}