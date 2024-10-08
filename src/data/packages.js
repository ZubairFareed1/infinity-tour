const packages = [
    {
      id: 1,
      title: "Explore Paris",
      description: "Embark on a 3-day exploration of France, from the charming streets of Paris to the historic landmarks like the Eiffel Tower and Notre-Dame. Savor exquisite French cuisine, stroll through art-filled museums, and enjoy the romantic ambiance that makes France one of the top destinations in Europe",
      includes: {
        meal: true,
        days: 3,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: true
      },
      departureLocation: " abc street ,New York, USA",
      departureTime: "10:00 AM",
      returnTime: "4:00 PM",
      returnLocation: " abc street ,New York, USA",
      wearing: "Winter Jacket, Snowpants, and Snowboots",
      rating: 4.8,
      reviews: 2500,
      age: 18,
      months:["Sep",'Jun'],
      offerAvailable:true,
      price: "$1500",
      image: "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1048826978v2-2313x1406.jpg",
      address: "Paris, France",
      mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39145.16996770899!2d2.2980126062796957!3d48.86397649911817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e1!3m2!1sen!2s!4v1728414803887!5m2!1sen!2s"
    },
    {
      id: 2,
      title: "USA Adventure",
      description: "Discover the beauty of the USA in this 5-day tour that includes visits to vibrant cities like New York and Los Angeles, plus breathtaking natural wonders like the Grand Canyon. Experience diverse cultures, iconic landmarks, and world-class attractions in one of the world's most dynamic countries.",
      includes: {
        meal: true,
        days: 5,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: true
      },
      departureLocation: " abc street ,New York, USA",
      departureTime: "10:00 AM",
      returnTime: "4:00 PM",
      returnLocation: " abc street ,New York, USA",
      wearing: "Winter Jacket, Snowpants, and Snowboots",
      rating: 5.0,
      reviews: 9400,
      age: 18,
      months:["Sep",'Jun'],
      offerAvailable:true,
      price: "$2500",
      image: "https://thumbs.dreamstime.com/b/atlanta-georgia-usa-downtown-skyline-atlanta-georgia-usa-110765393.jpg",
      address: "Atlanta, Georgia, USA",
      mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18980188.68579529!2d-126.07338741221237!3d39.834783425145325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e1!3m2!1sen!2s!4v1728415257787!5m2!1sen!2s"
    },
    {
      id: 3,
      title: "Indonesian Paradise",
      description: "Explore Indonesia’s stunning islands and rich cultural heritage in this 4-day journey. From Bali's beaches to the temples of Yogyakarta, you'll experience a perfect blend of natural beauty and historical significance. Enjoy local cuisine, vibrant markets, and the tranquility of lush tropical landscapes.",
      includes: {
        meal: true,
        days: 4,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: false
      },
      departureLocation: " abc street ,New York, USA",
      departureTime: "10:00 AM",
      returnTime: "4:00 PM",
      returnLocation: " abc street ,New York, USA",
      wearing: "Winter Jacket, Snowpants, and Snowboots",
      rating: 5.0,
      reviews: 8600,
      age: 15,
      months:["Sep",'Jun'],
      offerAvailable:true,
      price: "$1800",
      image: "https://www.eyeonasia.gov.sg/images/asean-countries/Indonesia%20snapshot%20cover%20iso.jpg",
      address: "Bali, Indonesia"
    },
    {
      id: 4,
      title: "Italy Highlights",
      description: "Delve into Italy’s history, art, and cuisine in this 3-day tour. Visit iconic cities like Rome and Florence, explore the ruins of the Colosseum, admire Renaissance masterpieces, and indulge in world-famous Italian dishes. This journey is a perfect mix of culture, beauty, and culinary delights.",
      includes: {
        meal: true,
        days: 6,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: true,
      },
      departureLocation: " abc street ,New York, USA",
      departureTime: "10:00 AM",
      returnTime: "4:00 PM",
      returnLocation: " abc street ,New York, USA",
      wearing: "Winter Jacket, Snowpants, and Snowboots",
      rating: 4.9,
      reviews: 6000,
      age: 12,
      months:["Sep",'Jun'],
      offerAvailable:true,
      price: "$2200",
      image: "https://www.travelanddestinations.com/wp-content/uploads/2019/05/Beautiful-places-in-Italy-Burano.jpg",
      address: "Rome, Italy"
    },
    {
      id: 5,
      title: "Spanish Fiesta",
      description: "Uncover the vibrant essence of Spain in this 4-day trip through Madrid, Barcelona, and Seville. Experience flamenco dancing, stunning architecture like the Sagrada Familia, and the rich history of Spanish culture. From tapas to breathtaking landscapes, Spain promises an unforgettable adventure.",
      includes: {
        meal: true,
        days: 3,
        tickets: true,
        guide: false,
        accommodation: true,
        transport: true
      },
      departureLocation: " abc street ,New York, USA",
      departureTime: "10:00 AM",
      returnTime: "4:00 PM",
      returnLocation: " abc street ,New York, USA",
      wearing: "Winter Jacket, Snowpants, and Snowboots",
      rating: 4.7,
      reviews: 4800,
      offerAvailable:true,
      price: "$1700",
      image: "https://imgproxy.natucate.com/HmhJoiR_WkciuQQilTkPCsa2I1qjjNxzpO0_rVNLX8E/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvNDI4YTYzZWUtMmYzOS00YmFjLTgwY2UtNmY2N2Y4Yzc1NzJlL2MxNDJhZjc3MWUtMTY3OTQ4Njc1MC9zcGFuaWVuLWxhZW5kZXJpbmZvcm1hdGlvbmVuLXN0YWR0LW96ZWFuLXdhc3Nlci1uYXR1Y2F0ZS5qcGc"
    },
    {
      id: 6,
      title: "Australia Getaway",
      description: "Enjoy a 5-day tour of Australia’s most iconic destinations. Explore Sydney’s Opera House, dive into the Great Barrier Reef, and discover the country’s diverse wildlife. This adventure blends modern city life with the beauty of Australia's unique natural landscapes, offering a memorable escape.",
      includes: {
        meal: true,
        days: 7,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: true
      },
      departureLocation: " abc street ,New York, USA",
      departureTime: "10:00 AM",
      returnTime: "4:00 PM",
      returnLocation: " abc street ,New York, USA",
      rating: 4.8,
      reviews: 4200,
      price: "$2400",
      image: "https://www.shutterstock.com/image-photo/sydney-australia-october-20-2023-600nw-2465212583.jpg"
    },
    {
      id: 7,
      title: "Japan Culture Trip",
      description: "Experience Japan’s harmonious blend of ancient traditions and cutting-edge modernity in this 4-day trip. From Tokyo’s bustling streets to Kyoto’s serene temples and gardens, explore Japan’s unique culture, delectable cuisine, and beautiful landscapes that reflect its deep-rooted heritage and futuristic flair",
      includes: {
        meal: true,
        days: 5,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: false
      },
      departureLocation: " abc street ,New York, USA",
      departureTime: "10:00 AM",
      returnTime: "4:00 PM",
      returnLocation: " abc street ,New York, USA",
      rating: 4.9,
      reviews: 5100,
      price: "$2100",
      image: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg"
    },
    {
      id: 8,
      title: "Canada Wilderness",
      description: "Explore the wonders of Canada on this 4-day adventure. Visit vibrant cities like Toronto and Vancouver, then venture into the stunning natural beauty of the Rocky Mountains. From cosmopolitan streets to serene wilderness, Canada offers an unparalleled blend of urban excitement and outdoor exploration.",
      includes: {
        meal: true,
        days: 6,
        tickets: true,
        guide: false,
        accommodation: true,
        transport: true
      },
      departureLocation: " abc street ,New York, USA",
      departureTime: "10:00 AM",
      returnTime: "4:00 PM",
      returnLocation: " abc street ,New York, USA",
      rating: 4.7,
      reviews: 3000,
      price: "$2300",
      image: "https://ilacinternationalcollege.com/wp-content/uploads/2024/06/Featured-image-1024x683.jpg"
    },
    {
      id: 9,
      title: "Brazil Carnival",
      description: "Discover the vibrant culture, stunning beaches, and lush rainforests of Brazil in this 3-day adventure. Visit Rio de Janeiro, home to Christ the Redeemer, samba rhythms, and carnival spirit. Experience the lively street culture, and explore the breathtaking natural beauty of Brazil’s diverse landscapes.",
      includes: {
        meal: false,
        days: 4,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: true
      },
      rating: 4.6,
      reviews: 2800,
      price: "$1900",
      image: "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/29/gettyimages-161356247.jpg?crop=0.888888888888889xw:1xh;center,top&resize=768:*"
    },
    {
      id: 10,
      title: "Thailand Serenity",
      description: "A 4-day escape to the exotic charm of Thailand. Relax on pristine beaches, explore Bangkok’s temples and bustling markets, and savor the flavors of Thai cuisine. Discover ancient traditions, vibrant city life, and serene natural beauty, all within a journey through this Southeast Asian paradise.",
      includes: {
        meal: true,
        days: 4,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: true
      },
      rating: 4.8,
      reviews: 4000,
      price: "$1600",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 11,
      title: "Mexico City Escape",
      description: "Immerse yourself in Mexico’s rich history and lively culture on this 3-day trip. Visit ancient ruins, colorful cities like Mexico City and Cancun, and relax on stunning beaches. Enjoy flavorful cuisine, explore vibrant markets, and soak in the warmth and energy of Mexican hospitality.",
      includes: {
        meal: false,
        days: 3,
        tickets: true,
        guide: false,
        accommodation: true,
        transport: true
      },
      rating: 4.5,
      reviews: 2700,
      price: "$1300",
      image: "https://i.natgeofe.com/n/73d9e4e3-4884-4e93-ac41-6be6a90079f5/mexico-city-travel%20(1).jpg?w=2880&h=1920"
    },
    {
      id: 12,
      title: "German Castles",
      description: "Explore Germany’s captivating history and scenic beauty in this 4-day trip. Visit Berlin’s iconic Brandenburg Gate, tour medieval castles, and enjoy the country’s picturesque countryside. From traditional Bavarian villages to modern urban centers, Germany offers a perfect blend of old-world charm and contemporary culture.",
      includes: {
        meal: true,
        days: 4,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: false
      },
      rating: 4.9,
      reviews: 3500,
      price: "$2100",
      image: "https://media.istockphoto.com/id/658000044/photo/aerial-view-of-cologne-at-spring.jpg?s=612x612&w=0&k=20&c=3RAU-3oUEuBRfa4_1dqgEWxIwwWfkLNctzUTYKL479g="
    },
    {
      id: 13,
      title: "Indian Heritage",
      description: "Discover India’s diverse culture, history, and vibrant cities in this 5-day tour. Visit the Taj Mahal, explore Jaipur’s palaces, and experience the spiritual ambiance of Varanasi. India’s rich traditions, colorful festivals, and warm hospitality make this a unique and transformative travel experience",
      includes: {
        meal: true,
        days: 5,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: true
      },
      rating: 4.6,
      reviews: 3400,
      price: "$1700",
      image: "https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200"
    },
    {
      id: 14,
      title: "South African Safari",
      description: "Embark on a 4-day journey through South Africa’s breathtaking landscapes and wildlife. Enjoy safaris in Kruger National Park, explore Cape Town’s Table Mountain, and discover the country’s cultural heritage. South Africa offers a perfect mix of adventure, nature, and vibrant urban experiences.",
      includes: {
        meal: true,
        days: 6,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: true
      },
      rating: 5.0,
      reviews: 4200,
      price: "$2600",
      image: "https://img.theculturetrip.com/450x300/smart/wp-content/uploads/2017/12/south_africa_featured_image.jpg"
    },
    {
      id: 15,
      title: "Greek Islands Odyssey",
      description: "Sail across the picturesque Greek islands with this dreamy package. ",
      includes: {
        meal: true,
        days: 4,
        tickets: true,
        guide: true,
        accommodation: true,
        transport: false
      },
      rating: 4.9,
      reviews: 5400,
      price: "$2400",
      image: "https://cdn.britannica.com/63/191763-050-0D48B8D5/Panagia-Trimarti-sunset-Oia-Santorini-Greece.jpg"
    },
    // Packages 16 to 25 will follow the same format...
  ];
export default packages;