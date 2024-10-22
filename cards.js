let arrofobj = [
    {
        "id":1,
        "imgurl": "https://cdn.shopclues.com/images1/detailed/91650/140487009-91650382-1535530176.jpg",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    },
    {
        "id":2,
        "imgurl": "https://i5.walmartimages.com/asr/e8344890-ea85-43e6-ba5d-27df927d0d2e_1.7892f1a320dd990d3a89b5b337faf928.jpeg",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    },
    {
        "id":3,
        "imgurl": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    },
    {
        "id":4,
        "imgurl": "http://www.tennisnuts.com/images/product/full/Nike-Air-Zoom-Pegasus-31-Womens-Running-Shoe-654486_501_A_PREM.jpg",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    },
    {
        "id":5,
        "imgurl": "https://tse1.mm.bing.net/th?id=OIP.tovlTWhGI3xPv4KW3nnwTAHaE8&pid=Api&P=0&h=220",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    },
    {
        "id":6,
        "imgurl": "https://tse4.mm.bing.net/th?id=OIP.pYwUMdRLLjjvATjgjqU5agHaHa&pid=Api&P=0&h=220",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    },
    {
        "id":7,
        "imgurl": "https://i5.walmartimages.com/asr/68134114-756b-43f2-8071-7ed7f7d414a9_1.28b7047b3bcc1ec858c1d0f516c864d5.jpeg",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    },
    {
        "id":8,
        "imgurl": "https://i.pinimg.com/originals/66/43/90/664390de992c1503ad503d4d632a0496.jpg",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    },
    {
        "id":9,
        "imgurl": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5ab0a6c-6393-4af6-abbc-4f1acaa6ed94/air-max-dawn-shoes-CLTL55.png",
        "pname": "shoes",
        "bname": "Nike",
        "pprize": 999
    }
]
let selectdiv = document.querySelector('#ans');
selectdiv.innerHTML = arrofobj.map((card)=>`
     <div style="margin:20px;box-shadow:0px 0px 10px 2px black">
        <img width="200px" height="200px" src="${card.imgurl}" alt="">
        <div>${card.pname}</div>
        <div>${card.bname}</div>
        <div>${card.pprize}</div>
        <div>Add to Cart</div>
        <div>Buy Now</div>
     </div>
`).join(" ");
.0