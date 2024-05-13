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
        slidesToScroll: 1
    };

    return (
        <Card style={{ marginTop: "100px", marginBottom: "40px", backgroundColor: "inherit" }} id = "reviews">
            <CardContent>
                <Typography variant="h5" component="h2" style={{ marginBottom: '100px', marginTop: '50px', backgroundColor: "purple", color: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", padding: "20px 20px"}}>
                    ВІДГУКИ
                </Typography>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} style={{ padding: "0 10px", textAlign: "center" }}>
                            <div style={{ border: "2px solid purple", borderRadius: "20px", overflow: "hidden", marginBottom: "10px", marginLeft: "20px", marginRight: "20px"}}>
                                <img
                                    src={image}
                                    alt="Review"
                                    style={{ width: "100%", height: "600px", objectFit: "cover", objectPosition: "bottom" }}
                                />
                            </div>
                            <div style={{ height: "10px", backgroundColor: "white" }} />
                        </div>
                    ))}
                </Slider>
                <Button
                    variant="contained"
                    color="primary"
                    href="https://www.instagram.com/bridge_to_usa/"
                    target="_blank"
                    style={{ marginBottom: "30px", marginTop: "30px", backgroundColor: "purple", borderRadius: "30px", padding: "20px 30px", fontSize: "20px"}}
                >
                    БІЛЬШЕ ВІДГУКІВ
                </Button>
            </CardContent>
        </Card>
    );
}