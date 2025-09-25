import { defineCollection, z } from "astro:content";

const propiedades = defineCollection({
    type: 'content',
    schema: z.object({
        titulo: z.string(),
        precio: z.number(),
        moneda: z.enum(['USD', 'ARS']),
        ubicacion: z.object({
            direccion: z.string(),
            localidad: z.string(),
            provincia: z.string(),
        }),
        caracteristicas: z.object({
            habitaciones: z.number(),
            baños: z.number(),
            superficieTotal: z.number(),
            metrosCubiertos: z.number(),
            tipo: z.enum(['Terreno', 'Casa', 'Departamento']),
            cochera: z.boolean().default(false),
            jardin: z.boolean().default(false),
            pileta: z.boolean().default(false),
            balcon: z.boolean().default(false),
            terraza: z.boolean().default(false),
        }),
        imagenes: z.object({
            principal: z.string(),
            galeria: z.array(z.string()),
        }),
        estado: z.enum(['venta', 'alquiler', 'vendido', 'alquilado']),
        destacado: z.boolean().default(false),
        descripcion: z.string().optional(),
        agente: z.object({
            nombre: z.string(),
            telefono: z.string(),
            email: z.string().email(),
            foto: z.string().optional(),
        }),
        expensas: z.number().optional(),
    })
})

export const collections = { propiedades }