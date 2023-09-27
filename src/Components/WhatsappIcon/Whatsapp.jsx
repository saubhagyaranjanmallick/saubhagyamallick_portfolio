import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { whatsappData } from '../../Protfolio';
import wp_img from "../../Assets/wp_img.JPG"

const Whatsapp = () => {
    return (
        <div>
            <FloatingWhatsApp
                phoneNumber={whatsappData.phoneNum}
                accountName={whatsappData.name}
                avatar={wp_img}
                statusMessage={whatsappData.statusMessage}
                chatMessage={whatsappData.chatMessage}
                placeholder={whatsappData.placeholder}
                notificationSound={Boolean}
                height={300}
                className="chatBot"
            />
        </div>
    )
}

export default Whatsapp;