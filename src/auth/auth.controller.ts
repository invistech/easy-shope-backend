import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AuthService } from "./auth.service";
import {
  CreateAdminUserAuthDto,
  LoginAdminUserAuthDto,
} from "./dto/create-admin-auth.dto";
import { CreateCustomerAuthDto } from "./dto/create-customer-auth.dto";
import { jwtConstants } from "./dto/jwtConstants";
import { UpdateAdminUserAuthDto } from "./dto/update-admin-auth.dto";
// @UseInterceptors(LoggerInterceptor)
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService
  ) {}

  @Post("admin/registration")
  async createAdmin(@Body() createAdminUserAuthDto: CreateAdminUserAuthDto) {
    const _hash = await bcrypt.genSalt();
    const _hashPassword = await bcrypt.hash(
      createAdminUserAuthDto.password,
      _hash
    );
    const _data = await {
      username: createAdminUserAuthDto.username,
      password: _hashPassword,
      email: createAdminUserAuthDto.email,
      mobileNumber: createAdminUserAuthDto.mobileNumber,
      firstName: createAdminUserAuthDto.firstName,
      lastName: createAdminUserAuthDto.lastName,
      passwordHash: _hash,
    };
    const result = await this.authService.createAdminServiceFn(_data);
    const genToken = await this.jwtService.sign(
      {
        username: result.username,
        email: result.email,
        userId: result.id,
      },
      jwtConstants
    );
    console.log({
      accessToken: await genToken,
    });
    return {
      accessToken: await genToken,
    };
  }
  @Post("admin/login")
  async loginAdmin(@Body() loginAdminUserAuthDto: LoginAdminUserAuthDto) {
    return await this.authService.loginAdminServiceFn(loginAdminUserAuthDto);
  }
  @Get("admins")
  findAllAdmin() {
    return this.authService.findAll();
  }

  @Get("admin/:id")
  findOneAdmin(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Patch("admin/:id")
  updateAdmin(
    @Param("id") id: string,
    @Body() updateAdminUserAuthDto: UpdateAdminUserAuthDto
  ) {
    return this.authService.update(+id, updateAdminUserAuthDto);
  }

  @Delete("admin/:id")
  removeAdmin(@Param("id") id: string) {
    return this.authService.remove(+id);
  }
  @Post("customer")
  create(@Body() createCustomerAuthDto: CreateCustomerAuthDto) {
    return this.authService.create(createCustomerAuthDto);
  }

  @Get("customers")
  findAllCustomer() {
    return this.authService.findAll();
  }

  @Get("customer/:id")
  findOneCustomer(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Patch("customer/:id")
  updateCustomer(
    @Param("id") id: string,
    @Body() updateCustomerAuthDto: CreateCustomerAuthDto
  ) {
    return this.authService.update(+id, updateCustomerAuthDto);
  }

  @Delete("customer/:id")
  removeCustomer(@Param("id") id: string) {
    return this.authService.remove(+id);
  }
}
