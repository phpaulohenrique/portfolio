'use client'
import phshopImg from './phshop.png'
import { StaticImageData } from 'next/image'

interface IProjects {
    name: string
    imgUrl: StaticImageData
    description: string
    appUrl: string
    githubUrl: string
    techs: string
}

export const projects: IProjects[] = [
    {
        name: 'PHShop',
        imgUrl: phshopImg,
        description: 'PHShop é um projeto pessoal que simula um e-commerce',
        appUrl: 'https://ph-shop.vercel.app',
        githubUrl: 'https://github.com/phpaulohenrique/ph-shop',
        techs: 'TypeScript, NextJS, ReactJS, Stitches, Stripe, Prisma, RadixUI.',
    },
    {
        name: 'PHShop2',
        imgUrl: phshopImg,
        description: 'PHShop é um projeto pessoal que simula um e-commerce',
        appUrl: 'https://ph-shop.vercel.app',
        githubUrl: 'https://github.com/phpaulohenrique/ph-shop',
        techs: 'TypeScript, NextJS, ReactJS, Stitches, Stripe, Prisma, RadixUI.',
    },
    {
        name: 'PHShop3',
        imgUrl: phshopImg,
        description: 'PHShop é um projeto pessoal que simula um e-commerce',
        appUrl: 'https://ph-shop.vercel.app',
        githubUrl: 'https://github.com/phpaulohenrique/ph-shop',
        techs: 'TypeScript, NextJS, ReactJS, Stitches, Stripe, Prisma, RadixUI.',
    },
]

// {
//     "projects": [
//         {
//             "id": 1,
//             "name": "PHShop"
//         },
//         {
//             "id": 1,
//             "name": "PHShop2"
//         }
//     ]
// }
