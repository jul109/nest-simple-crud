import { applyDecorators, UseGuards } from "@nestjs/common";


import { AuthGuard } from "@nestjs/passport";
import { UserRoleGuard } from "src/auth/guards/user-role.guard";
import { AppRoles } from "src/auth/interfaces/app-roles";
import { RoleProtected } from "./role-protected-decorator";


export function Auth(...roles: AppRoles[]){
    return applyDecorators(
        RoleProtected(...roles),
        UseGuards(AuthGuard(),UserRoleGuard)
    )
}