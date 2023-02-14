import { IsEmail, IsEnum, IsString, Length } from 'class-validator';
import { UserType } from '../../../types/user-type.enum.js';

export default class CreateUserDto {
  @IsEmail({}, { message: 'email must be valid address' })
  public email!: string;

  @IsString({ message: 'firstname is required' })
  @Length(1, 15, { message: 'Min length is 1, max is 15' })
  public name!: string;

  @IsEnum(UserType, { message: '$property should be a value from UserTypeEnum' })
  public type!: string;

  @IsString({ message: 'password is required' })
  @Length(6, 12, { message: 'Min length for password is 6, max is 12' })
  public password!: string;
}
