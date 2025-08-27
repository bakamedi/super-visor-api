import { Body, Controller, Post } from "@nestjs/common";

import * as loginAccountDtos from "../dtos/login-account.dtos";
import { LoginUseCase } from "../uses-cases/login";

@Controller("account")
export class AccountController {
  constructor(private readonly accountLoginUseCase: LoginUseCase) {}

  @Post("login")
  login(@Body() body: loginAccountDtos.LoginAccountDto) {
    return this.accountLoginUseCase.execute(body);
  }
}
