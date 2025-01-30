const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Nama Perusahaan",
    url: "https://www.website-hajiumroh.com",
    logo: "https://www.website-hajiumroh.com/logo.png",
    description: "Paket haji dan umroh terpercaya dengan layanan profesional.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Contoh No.1",
        addressLocality: "Jakarta",
        addressRegion: "DKI Jakarta",
        postalCode: "10110",
        addressCountry: "ID",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-812-3456-7890",
        contactType: "customer service",
    },
};

// Menambahkan schema JSON-LD ke dalam head
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);
