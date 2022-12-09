import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "src/prisma.service";
import { LoginAdminUserAuthDto } from "./dto/create-admin-auth.dto";
import { CreateCustomerAuthDto } from "./dto/create-customer-auth.dto";
import { jwtConstants } from "./dto/jwtConstants";
import { UpdateAdminUserAuthDto } from "./dto/update-admin-auth.dto";
export interface IValidCridential {
  accessToken: string;
}
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) { }
  async createAdminServiceFn(data) {
    const findAdminEmail = await this.prismaService.adminUser.findMany({
      where: { email: { equals: await data.email } },
    });
    const findAdminUsername = await this.prismaService.adminUser.findMany({
      where: { username: await data.username },
    });
    if (
      (await findAdminEmail.length) === 0 &&
      (await findAdminUsername.length) === 0
    ) {
      const result = await this.prismaService.adminUser.create({ data });
      return await result;
    } else if (findAdminEmail.length !== 0) {
      console.log(findAdminEmail);
      throw new HttpException(
        {
          email: data.email,
          message: "This email already exist. Try another",
        },
        HttpStatus.NOT_ACCEPTABLE
      );
    } else if (findAdminUsername.length !== 0) {
      throw new HttpException(
        {
          email: data.username,
          message: "This username already exist. Try another",
        },
        HttpStatus.NOT_ACCEPTABLE
      );
    } else {
      throw new HttpException(
        {
          message: "Empty content",
        },
        HttpStatus.NO_CONTENT
      );
    }
  }

  async loginAdminServiceFn(
    data: LoginAdminUserAuthDto
  ): Promise<IValidCridential | {[key: string]: string}> {
    if (Object.keys(data).length === 0) {
      console.log(Object.keys(data))
      // return ({message: "Empty !"})
      throw new HttpException(
        { message: "Empty payload !" },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    } else {
      
      const isValidAdminUser = await this.prismaService.adminUser.findUnique({
        where: {
          email: data.email,
        },
      });
      const isPassHash = async (password, passHash): Promise<String> => {
        return await bcrypt.hash(password, passHash);
      };
      console.log(isValidAdminUser);
      if (
        isValidAdminUser &&
        isValidAdminUser.password ===
        (await isPassHash(data.password, isValidAdminUser.passwordHash))
      ) {
        return {
          accessToken: this.jwtService.sign(
            {
              username: isValidAdminUser.username,
              email: isValidAdminUser.email,
              userId: isValidAdminUser.id,
            },
            jwtConstants
          ),
        };
      } else if (
        isValidAdminUser &&
        isValidAdminUser.password !==
        (await isPassHash(data.password, isValidAdminUser.passwordHash))
      ) {
        throw new HttpException(
          { message: "Please enter correct password" },
          HttpStatus.NON_AUTHORITATIVE_INFORMATION
        );
      } else if (!isValidAdminUser) {
        throw new HttpException(
          { message: "Invalid email and password" },
          HttpStatus.NON_AUTHORITATIVE_INFORMATION
        );
      } else {
        console.log(data)
        throw new HttpException(
          { message: "Internal server error !" },
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    }

  }
  create(createCustomerAuthDto: CreateCustomerAuthDto) {
    return "This action adds a new auth";
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAdminUserAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
