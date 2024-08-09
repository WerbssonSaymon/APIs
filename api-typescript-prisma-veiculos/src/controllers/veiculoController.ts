import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createVeiculo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nome } = req.body as unknown as { nome: string };
        const veiculo = await prisma.veiculo.create({
          data: {
            nome,
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
      const { nome } = req.body as unknown as { nome: string };

      const veiculos = await prisma.veiculo.update({
        where: {
          id: Number(id),
        },
        data: {
          nome,
        }
      })
      res.status(200).json(veiculos);
    } catch {
      res.status(500).json({ error: 'Erro ao atualizar o veículo' });
    }
}