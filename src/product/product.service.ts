import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  async create(data: Prisma.ProductCreateInput) {
    const response = await this.prismaService.product.create({ data });
    return await {
      message: "Product created successfully.",
      id: response.id,
    };
  }

  async findAll(_adminId: number) {
    const _varients = await this.prismaService.varient.findMany({
      where: { adminId: _adminId },
    });
    const _items = await this.prismaService.item.findMany({
      where: { adminId: _adminId },
    });
    const _varientUnites = await this.prismaService.varientUnit.findMany({
      where: { adminId: _adminId },
    });
    const _products = await this.prismaService.product.findMany({
      where: { adminId: _adminId },
    });
    const response = await _products.map(product => {
      return {
        ...product,
        items: product.itemIds.map(id => {
          return _items.find(item => item.id === id)
        }),
        varients: product.varientIds.map(id => {
          return _varients.find(varient => varient.id === id)
        }).map(varient => {
          return {
            ...varient,
            varientUnits: varient.varientUnitIds.map(id => {
              return _varientUnites.find(unit => unit.id === id)
            })
          }
        })
      }
    });
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
