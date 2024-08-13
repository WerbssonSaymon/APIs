import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

interface VeiculoRequestBody {
  modelo: string
  fabricante: string
  quantidade: number
}

export const createVeiculo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { modelo, fabricante, quantidade } = req.body as VeiculoRequestBody;
        const veiculo = await prisma.veiculo.create({
          data: {
            modelo,
            fabricante,
            quantidade,
          },
        });
        res.status(201).json(veiculo);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o veículo' });
    }
}

export const getVeiculos = async (req: Request, res: Response): Promise<void> => {
    try {
        const veiculos = await prisma.veiculo.findMany();

        res.status(200).json(veiculos);
    } catch {
        res.status(500).json({ error: 'Erro ao buscar o veículo' });
    }
}

export const getByIdVeiculos = async (req: Request, res: Response): Promise<void> => {
  try {
      const { id } = req.params

      const veiculos = await prisma.veiculo.findUnique({
        where: {
          id: Number(id),
        }
      })

      res.status(200).json(veiculos);
  } catch {
      res.status(500).json({ error: 'Erro ao buscar o veículo pelo id' });
  }
}

export const getByFabricVeiculos = async (req: Request, res: Response): Promise<void> => {
  try {

      const { fabricante } = req.params;

      const fabricanteExiste = await prisma.veiculo.findFirst({
        where: { 
          fabricante: {
            equals: fabricante,
          },
        },
      });

      if (!fabricanteExiste) {
        res.status(404).json({ message: `Fabricante ${fabricante} não encontrado.` });
        return;
      }

      const veiculos = await prisma.veiculo.findMany({
        where: { 
          fabricante: {
            equals: fabricante,
          },
        },
      })

      res.status(200).json(veiculos);
  } catch {
      res.status(500).json({ error: 'Erro ao buscar o veículo pelo fabricante' });
  }
}

export const deleteByIdVeiculos = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        
        const veiculos = await prisma.veiculo.delete({
          where: {
            id: Number(id),
          },
        })
        res.status(200).json(veiculos);
    } catch {
        res.status(500).json({ error: 'Erro ao deletar o veículo' });
    }
}

export const updateByIdVeiculo = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const { modelo, fabricante, quantidade } = req.body as unknown as { modelo: string, fabricante: string, quantidade: number };

      const veiculos = await prisma.veiculo.update({
        where: {
          id: Number(id),
        },
        data: {
          modelo,
          fabricante,
          quantidade,
        }
      })
      res.status(200).json(veiculos);
    } catch {
      res.status(500).json({ error: 'Erro ao atualizar o veículo' });
    }
}