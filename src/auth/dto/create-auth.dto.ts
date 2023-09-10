import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(2)
    fullName: string;
  
    @IsString()
    @MinLength(2)
    lastName: string;
  
    @IsString()
    @MinLength(5)
    phone: string;
  
    @IsString()
    @IsEmail()
    email: string;
  
    @Matches(/^\d{2}\/\d{2}\/\d{4}$/) // Validar el formato "DD/MM/YYYY"
    birthDay: string;
  
    password: string;
  
    isActive: string;
  
    sex: string;

    role: string;
}
