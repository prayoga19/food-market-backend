import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Role } from 'src/modules/auth/roles/role.enum';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  photo: string;

  @ApiProperty()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty()
  @IsNotEmpty()
  house_number: string;

  @ApiHideProperty()
  role: string;

  @ApiProperty()
  @IsNotEmpty()
  city: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsOptional()
  password: string;
}
