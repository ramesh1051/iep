const products = [
    {
        id: 'topper-inox-wet-dry-vacuum',
        category: 'Wet and Dry Vacuum Cleaners',
        image: 'assets/images/topper-inox.jpg', 
        manufacturer: 'Roots Multiclean Ltd.',
        specs: [
            { name: 'Capacities', value: '17, 24, 33, and 62 Litres' },
            { name: 'Superior Technology', value: 'Yes' },
            { name: 'Perfect from Product to Service', value: 'Yes' },
        ],
        description: 'Superior cleaning technology in a wet and dry vacuum cleaner, available in various capacities to suit your needs. Roots Multiclean Ltd. has been adding value since 1992.',
    },
    {
        id: 'roots-scrub-e4043',
        category: 'Sturdy Automatic Scrubber Drier',
        image: 'assets/images/roots-scrub.jpg', 
        manufacturer: 'Roots Multiclean Ltd.',
        specs: [
            { name: 'Scrubbing Width', value: '430 mm' },
            { name: 'Theoretical Area Coverage', value: 'up to 1720 m²/hr' },
            { name: 'Tank Capacity', value: '40 L (Fresh & Dirty Water)' },
        ],
        description: 'A handy, mains-operated scrubber-drier for quick, economical, and effective cleaning of all types of hard floors. Guarantees high maneuverability and easy handling.',
    },
    {
        id: 'makita-angle-grinder',
        category: 'Angle Grinders',
        image: 'assets/images/makita-angle-grinder.jpg', 
        manufacturer: 'Makita U.S.A.',
        specs: [
            { name: 'Models', value: '4", 4-1/2" & 5" series' },
            { name: 'Motor Protection', value: 'Labyrinth Construction & Zig-Zag Varnish' },
            { name: 'Versatility', value: 'AC/DC Switch for various power sources' },
        ],
        description: 'Professional angle grinders featuring labyrinth construction and protective zig-zag varnish to seal and protect the motor from contaminants and reduce heat. Designed for power, durability, performance, and accuracy.',
    },
    {
        id: 'promotech-magnetic-drills',
        category: 'Magnetic Drilling Machines',
        image: 'assets/images/promotech-magnetic-drills.jpg', 
        manufacturer: 'PROMOTECH Fabrication Machines Pvt. Ltd.',
        specs: [
            { name: 'Milling Capacity', value: 'up to 100 mm (PRO-102)' },
            { name: 'Advanced Systems', value: 'MPAC, ESB, MFSC' },
            { name: 'Portability', value: 'Compact and battery-driven options' },
        ],
        description: 'A wide range of compact and medium-sized magnetic drilling machines known for their excellent weight-to-power ratio, dual bars guide system, and smart electromagnetic bases for enhanced performance.',
    },
    {
        id: 'promotech-beveling-solutions',
        category: 'Beveling Solutions',
        image: 'assets/images/promotech-beveling-solutions.jpg', 
        manufacturer: 'PROMOTECH Fabrication Machines Pvt. Ltd.',
        specs: [
            { name: 'Bevel Width', value: 'up to 50 mm' },
            { name: 'Bevel Angles', value: '0° to 90° (model dependent)' },
            { name: 'Types', value: 'Plate Bevellers, Pipe Bevellers, Weld Shavers' },
        ],
        description: 'Comprehensive beveling solutions including plate bevelers, pipe bevelers, and weld shavers designed for various applications and materials, ensuring precision and efficiency.',
    },
    {
        id: 'promotech-welding-mechanization',
        category: 'Welding Mechanization',
        image: 'assets/images/promotech-welding-mechanization.jpg', 
        manufacturer: 'PROMOTECH Fabrication Machines Pvt. Ltd.',
        specs: [
            { name: 'Types', value: 'Welding Tractors, Positioners, CNC 3D Cutting' },
            { name: 'Features', value: 'Programmable, Dual Torch, Automatic Seam Tracking' },
            { name: 'Applications', value: 'Tank Welding, Circumferential & Irregular Surfaces' },
        ],
        description: 'Small and large welding mechanization solutions including programmable welding tractors, welding positioners, and 5-axis portable CNC 3D cutting and welding machines for diverse industrial applications.',
    },
    {
        id: 'promotech-drilling-accessories',
        category: 'Drilling Accessories',
        image: 'assets/images/promotech-drilling-accessories.jpg', 
        manufacturer: 'PROMOTECH Fabrication Machines Pvt. Ltd.',
        specs: [
            { name: 'Products', value: 'TCT Annular Cutters, Pilot Pins, Drill Bits' },
            { name: 'Cutter Diameters', value: '12 mm to 160 mm' },
            { name: 'Materials', value: 'High-quality for durability and performance' },
        ],
        description: 'A wide selection of high-quality drilling accessories including TCT annular cutters, pilot pins, and drill bits, designed to complement Promotech drilling machines for optimal performance.',
    },
    {
        id: 'roots-janitorial-products',
        category: 'Janitorial Products',
        image: 'assets/images/roots-janitorial-products.jpg', 
        manufacturer: 'Roots Multiclean Ltd.',
        specs: [
            { name: 'Product Range', value: 'Mops, Buckets, Wringers, Trolleys, Dust Bins' },
            { name: 'Systems', value: 'Velcro Systems, Bucket Less Mops, Uni System Tools' },
            { name: 'Features', value: 'Eco-friendly, innovative, durable' },
        ],
        description: 'A comprehensive range of janitorial products aimed at transforming cleaning into a delightful experience. Includes innovative and eco-friendly solutions for various cleaning needs.',
    },
    {
        id: 'roots-supervac-vacuum-cleaner',
        category: 'Supervac Vacuum Cleaner',
        image: 'assets/images/roots-supervac-vacuum-cleaner.jpg', 
        manufacturer: 'Roots Multiclean Ltd.',
        specs: [
            { name: 'Functionality', value: '3 in 1: Wet, Dry, Blow' },
            { name: 'Versatility', value: 'Incredibly Powerful, Incredibly Versatile' },
            { name: 'Accessories', value: 'Master nozzle, extension wands, crevice tools, filter bag' },
        ],
        description: 'An incredibly powerful and versatile 3-in-1 vacuum cleaner designed for wet, dry, and blow applications, making it suitable for a wide range of cleaning tasks.',
    },
];

const productTablesData = [
    {
        title: "Detailed Product Comparison",
        headers: ["Model", "No. of Motors", "Power (W)", "Voltage (V)", "Water lift (mm H₂O)", "Airflow (m³/h)", "Tank Capacity (L)", "Accessories (Ø)"],
        rows: [
            ["SOTOP215 NX", "1 Single Stage High Speed By Pass", "1200", "220-240", "2380", "200", "17", "36"],
            ["SOTOP215/24LNX", "1 Single Stage High Speed By Pass", "1200", "220-240", "2380", "200", "24", "36"],
            ["SOTOP215/24LNXHEPA", "1 Single Stage High Speed By Pass", "1200", "220-240", "2380", "200", "24", "Ø36"],
            ["SOTOP515NX", "1 Single Stage High Speed By Pass", "1200", "220-240", "2380", "200", "33", "Ø38"],
            ["SOTOP429TNX", "2 Single Stage High Speed By Pass", "2400", "220-240", "2380", "400", "62", "Ø38"],
            ["SOTOP440TNX", "3 Single Stage High Speed By Pass", "3600", "220-240", "2380", "600", "62", "38"],
        ]
    },
    {
        title: "RootsScrub E4043 Specifications",
        headers: ["Description", "Units", "Values"],
        rows: [
            ["Scrubbing width", "mm", "430"],
            ["Effective suction width", "mm", "750"],
            ["Theoretical area coverage", "m²/hr", "1720"],
            ["Working speed, up to", "km/hr", "4"],
            ["Power supply", "V/Hz", "230/50"],
            ["Total power", "W", "1200"],
            ["Brush motor", "W", "800"],
            ["Vacuum motor power", "W", "400"],
            ["No. of brushes", "No.", "1"],
            ["Diameter of brush", "mm", "430"],
            ["Brush speed (min)", "rpm", "280"],
            ["Brush load", "kg", "22"],
            ["Fresh water tank", "L", "40"],
            ["Dirty water tank", "L", "40"],
            ["Dimensions (L×W×H) with Squeegee", "mm", "1205×780×1055"],
            ["Dimensions (L×W×H) without Squeegee", "mm", "1205×465×1055"],
            ["Total weight ready to operate", "kg", "120"],
            ["Sound Level", "dB(A)", "73.5"],
        ]
    },
    {
        title: "Makita Angle Grinder Specifications",
        headers: ["Model", "Grinding Wheel", "Wire Cup Brush", "Sanding Disc", "No Load Speed", "AMPS (120V)", "Spindle Thread", "Overall Length", "Net Weight", "Shipping Weight", "Master Carton Qty.", "UPC Code"],
        rows: [
            ["9553NB/K*", '4"', '3"', '4"', "11,000 RPM", "6.0", "M10×1.25", "10-1/8\"", "3.1 lbs.", "5.6 lbs./8.2 lbs.", "4/3", "088381-06158-2"],
            ["9554NB", '4-1/2"', '3-1/2"', '4-1/2"', "10,000 RPM", "6.0", "5/8\" -11 UNC", "10-1/8\"", "3.1 lbs.", "6.0 lbs.", "4", ""],
            ["9557NB", '4-1/2"', '3-1/2"', '4-1/2"', "11,000 RPM", "7.5", "5/8\" -11 UNC", "10-5/8\"", "3.5 lbs.", "6.3 lbs.", "4", "088381-06177-3"],
            ["9557PB", '4-1/2"', '3-1/2"', '4-1/2"', "10,000 RPM", "7.5", "5/8\" -11 UNC", "10-5/8\"", "3.5 lbs.", "6.5 lbs.", "4", "088381-06244-2"],
            ["9558NB", '5"', '3-1/2"', '5"', "11,000 RPM", "7.5", "5/8\" -11 UNC", "10-5/8\"", "3.5 lbs.", "6.4 lbs.", "4", "088381-06353-1"],
            ["9558PB", '5"', '3-1/2"', '5"', "10,000 RPM", "7.5", "5/8\" -11 UNC", "10-5/8\"", "3.5 lbs.", "6.6 lbs.", "4", "088381-06392-0"],
        ]
    },
    {
        title: "PROMOTECH Compact Magnetic Drilling Machines",
        headers: ["Model", "Annular cutter capacity", "Depth of cut", "Twist drill diameter", "Stroke", "Motor power", "Weight", "List Price"],
        rows: [
            ["PRO-36", "36 mm", "51 mm", "12 mm", "70 mm", "1020 W", "10 kg", ""],
            ["PRO-36 T3", "36 mm", "51 mm", "12 mm", "70 mm", "1020 W", "11 kg", ""],
            ["PRO-36 AUTO", "36 mm", "51 mm", "12 mm", "70 mm", "1020 W", "13.5 kg", ""],
            ["PRO-36 AD", "36 mm", "30 mm", "12 mm", "39 mm", "1020 W", "9.5 kg", ""],
            ["PRO-40 AD", "40 mm", "50 mm", "12 mm", "50 mm", "1100 W", "10 kg", ""],
            ["PRO-36 BATTERY", "36 mm", "50 mm", "12 mm", "70 mm", "450 W", "11.5 kg (with 4.0 Ah Battery)", ""],
            ["PRO-40", "40 mm", "50 mm", "16 mm", "160 mm", "1100 W", "13 kg", ""],
        ]
    },
    {
        title: "PROMOTECH Medium-Sized Magnetic Drilling Machines",
        headers: ["Model", "Annular cutter capacity", "Depth of cut", "Twist drill diameter", "Stroke", "Motor power", "Weight", "Spindle", "List Price"],
        rows: [
            ["PRO-50", "50 mm", "75 mm", "23 mm", "160 mm", "1150 W", "15.5 kg", "MT2", ""],
            ["PRO-55", "55 mm", "75 mm", "16 mm", "160 mm", "1100 W", "15 kg", "Weldon shank 19 mm", ""],
            ["PRO-62", "65 mm", "75 mm", "16 mm", "95 mm", "1600 W", "17 kg", "Weldon shank 19 mm", ""],
            ["PRO-72", "70 mm", "75 mm", "25 mm", "190 mm", "1600 W", "18 kg", "MT3", ""],
            ["PRO-102", "100 mm", "100 mm", "31.75 mm", "225 mm", "1650 W", "24 kg", "MT3", ""],
        ]
    },
    {
        title: "PROMOTECH Tapping & Drilling Machines",
        headers: ["Model", "Annular cutter capacity", "Max tapping capacity", "Twist drill diameter", "Stroke", "Depth of cut", "Motor power", "Weight", "Spindle", "List Price"],
        rows: [
            ["PRO-52T", "50 mm", "M20", "23 mm", "190 mm", "75 mm", "1600 W", "17 Kg", "MT2", ""],
            ["PRO-72T", "70 mm", "M20", "25 mm", "190 mm", "75 mm", "1600 W", "18 Kg", "MT3", ""],
            ["PRO-122T/PRO-122T SB", "120 mm", "M30", "31.75 mm", "225 mm", "100 mm", "2300 W", "25 kg", "MT3", ""],
            ["PRO-152T", "150 mm", "M42", "47 mm", "260 mm", "100 mm", "2300 W", "31 kg", "MT4", ""],
        ]
    },
    {
        title: "PROMOTECH Rail Drilling Machines",
        headers: ["Model", "Annular cutter capacity", "Depth of cut", "Twist drill diameter", "Stroke", "Weight", "Drive", "List Price"],
        rows: [
            ["PRO-36R ELECTRIC", "36 mm", "30 mm", "16 mm", "40 mm", "14.5 kg", "single phase electric motor", ""],
            ["PRO-36R BATTERY", "36 mm", "30 mm", "16 mm", "40 mm", "14.5 kg", "battery electric motor", ""],
            ["PRO-36RH PETROL", "36 mm", "30 mm", "16 mm", "39 mm", "18.5 kg", "4-stroke HONDA petrol motor", ""],
        ]
    },
    {
        title: "PROMOTECH Hydraulic Punchers",
        headers: ["Model", "Max. thickness", "Max. throat depth", "Max. hole", "Max. oblong hole", "Punching time", "Punching power", "Double action movement"],
        rows: [
            ["PRO-60 HP", "13 mm", "60 mm", "27 mm", "25x18 mm", "5 sec", "35 ton", "YES"],
            ["PRO-110 HP", "16 mm", "110 mm", "27 mm", "25x18 mm", "8 sec", "47 ton", "YES"],
        ]
    },
    {
        title: "PROMOTECH ATEX Drills for Hazardous Environments",
        headers: ["Model", "Annular cutter capacity", "Depth of cut", "Twist drill diameter", "Stroke", "Motor power", "Weight", "List Price"],
        rows: [
            ["PRO-40 AD ATEX", "40 mm", "25 mm", "16 mm", "40 mm", "800 W", "15 kg", ""],
            ["PRO-50/2 ATEX", "50 mm", "50 mm", "23 mm", "150 mm", "800 W", "24.5 kg", ""],
            ["PRO-200 A ATEX", "200 mm", "100 mm", "45 mm", "400 mm", "3650 W", "130 kg", ""],
        ]
    },
    {
        title: "PROMOTECH Tapping Chucks",
        headers: ["Type", "Product Code", "Description", "Suitable Adapter", "List Price"],
        rows: [
            ["MT2-19", "OPR-0584-06-00-00-1", "Tapping chuck MT2 x 19 mm", "TA-1 Adapter", ""],
            ["MT2-31", "OPR-0584-10-00-00-1", "Tapping chuck MT2 x 31 mm", "TA-2 Adapter", ""],
            ["MT3-19", "OPR-0584-11-00-00-1", "Tapping chuck MT3 x 19 mm", "TA-1 Adapter", ""],
            ["MT3-31", "OPR-0584-08-00-00-1", "Tapping chuck MT3 x 31 mm", "TA-2 Adapter", ""],
            ["MT3-48", "OPR-0584-02-00-00-1", "Tapping chuck MT3 x 48 mm", "TA-3 Adapter", ""],
            ["MT4-31", "OPR-0584-09-00-00-1", "Tapping chuck MT4 x 31 mm", "TA-2 Adapter", ""],
            ["MT4-48", "OPR-0584-04-00-00-1", "Tapping chuck MT4 x 48 mm", "TA-3 Adapter", ""],
            ["MT4-60", "OPR-0584-07-00-00-1", "Tapping chuck MT4 x 60 mm", "TA-4 Adapter", ""],
        ]
    },
    {
        title: "PROMOTECH TA-Tapping Adapters",
        headers: ["Type", "Product Code", "Description", "List Price"],
        rows: [
            ["TA-1", "WKL-000069", "Tapping Adapter 19 mm x M8", ""],
            ["TA-1", "WKL-000070", "Tapping Adapter 19 mm x M10", ""],
            ["TA-1", "WKL-000071", "Tapping Adapter 19 mm x M12", ""],
            ["TA-2", "WKL-000072", "Tapping Adapter 31 mm x M8", ""],
            ["TA-2", "WKL-000073", "Tapping Adapter 31 mm x M10", ""],
            ["TA-2", "WKL-000074", "Tapping Adapter 31 mm x M12", ""],
            ["TA-2", "WKL-000075", "Tapping Adapter 31 mm x M14", ""],
            ["TA-2", "WKL-000076", "Tapping Adapter 31 mm x M16", ""],
            ["TA-2", "WKL-000077", "Tapping Adapter 31 mm x M18", ""],
            ["TA-2", "WKL-000078", "Tapping Adapter 31 mm x M20", ""],
            ["TA-3", "WKL-000079", "Tapping Adapter 48 mm x M14", ""],
            ["TA-3", "WKL-000080", "Tapping Adapter 48 mm x M16", ""],
            ["TA-3", "WKL-000081", "Tapping Adapter 48 mm x M18", ""],
            ["TA-3", "WKL-000082", "Tapping Adapter 48 mm x M20", ""],
            ["TA-3", "WKL-000083", "Tapping Adapter 48 mm x M22/M24", ""],
            ["TA-3", "WKL-000084", "Tapping Adapter 48 mm x M27", ""],
            ["TA-3", "WKL-000085", "Tapping Adapter 48 mm x M30", ""],
            ["TA-4", "WKL-000086", "Tapping Adapter 60 mm x M24", ""],
            ["TA-4", "WKL-000087", "Tapping Adapter 60 mm x M27", ""],
            ["TA-4", "WKL-000088", "Tapping Adapter 60 mm x M30", ""],
            ["TA-4", "WKL-000089", "Tapping Adapter 60 mm x M33", ""],
            ["TA-4", "WKL-000090", "Tapping Adapter 60 mm x M36", ""],
            ["TA-4", "WKL-000091", "Tapping Adapter 60 mm x M42", ""],
        ]
    },
    {
        title: "PROMOTECH Magnetic Drilling Machines Accessories",
        headers: ["Description", "Product Code", "Remark", "List Price"],
        rows: [
            ["Vacuum Pad for Mag Drills", "PDS-0587-10-00-00-0", "Suitable for non ferrous material using air compressor", ""],
            ["Compressed Air Ejector", "ZSP-0587-11-00-00-0", "", ""],
            ["Vacuum Pump", "OPR-0584-11-00-00-1", "Vacuum Pad additionally required", ""],
        ]
    },
    {
        title: "PROMOTECH Drill Bits",
        headers: ["Part No.", "Drill diameter (mm)", "Shank Diameter (mm)", "Depth of Cut (mm)", "List Price (₹)"],
        rows: [
            ["PFM-000101", "3", "19.05", "35", ""],
            ["PFM-000102", "4", "19.05", "35", ""],
            ["PFM-000103", "5", "19.05", "35", ""],
            ["PFM-000104", "6", "19.05", "35", ""],
            ["PFM-000105", "7", "19.05", "35", ""],
            ["PFM-000106", "8", "19.05", "35", ""],
            ["PFM-000107", "9", "19.05", "35", ""],
            ["PFM-000108", "10", "19.05", "35", ""],
            ["PFM-000109", "11", "19.05", "35", ""],
            ["PFM-000110", "12", "19.05", "35", ""],
        ]
    },
    {
        title: "PROMOTECH Pilot Pins",
        headers: ["Pilot Pin Size", "Matching TCT Metric Cutters", "Product Code", "List Price"],
        rows: [
            ["06.34 x 90 mm", "Ø12-17 mm in 35 mm D.O.C.", "PLT-000105", ""],
            ["07.98 x 90 mm", "Ø18-65 mm in 35 mm D.O.C.", "PLT-000106", ""],
            ["06.34 x 106 mm", "Ø12-17 mm in 50 mm D.O.C.", "PLT-000107", ""],
            ["07.98 x 106 mm", "Ø18-60 mm in 50 mm D.O.C.", "PLT-000108", ""],
            ["07.98 x 115 mm", "Ø61-160 mm in 50 mm D.O.C.", "PLT-000109", ""],
            ["07.98 x 130 mm", "Ø18-60 mm in 75 mm D.O.C.", "PLT-000102", ""],
            ["07.98 x 145 mm", "Ø61-160 mm in 75 mm D.O.C.", "PLT-000110", ""],
            ["07.98 x 160 mm", "Ø18-60 mm in 100 mm D.O.C.", "PLT-000103", ""],
            ["07.98 x 175 mm", "Ø61-160 mm in 100 mm D.O.C.", "PLT-000111", ""],
        ]
    }
];

const manufacturers = [
    { name: 'Roots Multiclean Ltd.', logo: 'assets/images/roots_logo.png', logoSize: 'h-16' },
    { name: 'Makita U.S.A.', logo: 'assets/images/makita_logo.png', logoSize: 'h-16' },
    { name: 'PROMOTECH Fabrication Machines Pvt. Ltd.', logo: 'assets/images/promotech_logo.png', logoSize: 'h-16' },
];