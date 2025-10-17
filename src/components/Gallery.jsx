// import the Gallery style
import { lazy } from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {

    // Mock data : The Gallery image data in the simulation database
    const galleryData = [
    {
        id: 1,
        title: "The Journey of New Zealand Brands",
        subtitle: "Exploring how storytelling drives emotional connection.",
        src: "/images/image1.jpg", // road photo
    },
    {
        id: 2,
        title: "Authenticity in Marketing",
        subtitle: "How local businesses use real experiences to build trust.",
        src: "/images/image2.jpg", // alpaca photo
    },
    {
        id: 3,
        title: "Adventure Tourism Campaigns",
        subtitle: "Turning extreme experiences into global brand moments.",
        src: "/images/image3.jpg", // bungee bridge
    },
    {
        id: 4,
        title: "The Power of Design in Brand Spaces",
        subtitle: "Creating immersive customer experiences through architecture.",
        src: "/images/image4.jpg", // departures building
    },
    {
        id: 5,
        title: "Night-Sky Marketing Inspiration",
        subtitle: "Why creativity often shines brightest after dark.",
        src: "/images/image5.jpg", // night sky with house
    },
    {
        id: 6,
        title: "Rebranding the Everyday",
        subtitle: "How bold visuals turn ordinary moments into powerful stories.",
        src: "/images/image6.jpg", // gas station
    },
    {
        id: 7,
        title: "Health Products and Visual Storytelling",
        subtitle: "Balancing trust and aspiration in wellness branding.",
        src: "/images/image7.jpg", // vitamins and supplements
    },
    {
        id: 8,
        title: "Wildlife and Ethical Marketing",
        subtitle: "How sustainability shapes the future of brand identity.",
        src: "/images/image8.jpg", // seal photo
    },
    ];
  return (
    <section className={styles.section}>
        <div className={styles.grid}>
            {galleryData.map((item) => (
                <article key={item.id} className={styles.card}>
                    <img src={item.src} alt={item.title} className={styles.image} loading="lazy"/>
                    <div className={styles.meta}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.subtitle}>{item.subtitle}</p>
                    </div>
                </article>
            ))}
        </div>        
    </section>
  )
}
