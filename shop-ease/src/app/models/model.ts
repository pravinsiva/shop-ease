
// mock data file
import { ICategories, IProducts } from "../interfaces/product-interface";

export const produts: Array<IProducts> = [
    
    {
        id: 1009,
        imgPathArray: ['shirt-1.jpg', 'shirt-2.jpg'],
        name: `Men's Shirts Cotton Military Shirt`,
        price: 2999,
        offer: 0.10,
        prodDesc: `Men's Shirts Cotton Military Shirt Khaki Casual Slim Fit with Pocket Long Sleeve Vintage Jacket Streetwear Drop`,
        categoryID: 2,
        displayedImage: ''
    },
    {
        id: 1001,
        imgPathArray: ['iphone-1.webp', 'iphone-2.webp'],
        name: 'Apple iPhone 14 Pro Max',
        price: 144999,
        offer: 0.20,
        prodDesc: 'Apple iPhone 14 Pro Max (1 TB) - Space Black',
        categoryID: 1,
        displayedImage: ''
    },
    {
        id: 1002,
        imgPathArray: ['dell1.jpg', 'dell2.jpg'],
        name: 'Dell Latitude 5420',
        price: 129700,
        offer: 0.10,
        prodDesc: 'Dell Latitude 5420 Intel i5 1135G7 14 inches FHD Business Laptop (8GB, 512GB NVMe, Windows 10 Pro, 3 Year ADP, 1.37Kg)',
        categoryID: 1,
        displayedImage: ''
    },
    {
        id: 1003,
        imgPathArray: ['apple-airpods.jpg', 'apple-airpods2.jpg'],
        name: 'AirPods Pro (2nd Gen)',
        price: 22999,
        offer: 0.10,
        prodDesc: 'AirPods Pro, MagSafe Charging Case with speaker and lanyard loop, Silicone ear tips (four sizes: XS, S, M, L), Lightning to USB-C Cable, Documentation',
        categoryID: 1,
        displayedImage: ''
    },
    {
        id: 1004,
        imgPathArray: ['oneplustv-1.webp', 'oneplustv-2.jpg'],
        name: 'OnePlus TV u1s',
        price: 37999,
        offer: 0.18,
        prodDesc: 'OnePlus 163.8 cm (65 inches) U Series 4K LED Smart Android TV 65U1S (Black)',
        categoryID: 1,
        displayedImage: ''
    },
    {
        id: 1005,
        imgPathArray: ['samsung-mobile-1.jpg', 'samsung-mobile-2.jpg'],
        name: 'Samsung Galaxy S22',
        price: 121999,
        offer: 0.14,
        prodDesc: 'Samsung Galaxy S22 5G (Phantom Black, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        categoryID: 1,
        displayedImage: ''
    },
    {
        id: 1006,
        imgPathArray: ['samsung-watch-1.webp', 'samsung-watch-2.png'],
        name: 'Samsung Smart Watch',
        price: 37999,
        offer: 0.12,
        prodDesc: 'Samsung Galaxy Watch6 Classic LTE (47mm, Silver, Compatible with Android only)',
        categoryID: 1,
        displayedImage: ''
    },
    {
        id: 1007,
        imgPathArray: ['mi-1.png', 'mi-2.jpg'],
        name: 'Mi Trimmer 2',
        price: 999,
        offer: 0.5,
        prodDesc: 'MI Xiaomi Beard Trimmer for Men 2C With High Precision Trimming | 2 Beard Comb | USB Type-C | Fast Charging | 0.5mm Precision | 40 Length Settings | 90 Min Run Time, Black',
        categoryID: 1,
        displayedImage: ''
    },
    {
        id: 1008,
        imgPathArray: ['seagate-1.jpg', 'seagate-2.jpg'],
        name: 'Seagate Hard Disk',
        price: 5999,
        offer: 0.20,
        prodDesc: 'Expansion 2TB External HDD - USB 3.0 for Windows and Mac with 3 yr Data Recovery Services, Portable Hard Drive (STKM2000400)',
        categoryID: 1,
        displayedImage: ''
    },
];

export const category: Array<ICategories> = [
    {
        categoryID: 0,
        categoryName: 'All'
    },
    {
        categoryID: 1,
        categoryName: 'Electronics'
    },
    {
        categoryID: 2,
        categoryName: 'Clothings'
    },
    {
        categoryID: 3,
        categoryName: 'Groceries'
    },
    {
        categoryID: 4,
        categoryName: 'Stationaries'
    }

]