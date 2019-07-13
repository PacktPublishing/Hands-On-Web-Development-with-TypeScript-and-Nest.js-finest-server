import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    private async validate(userData: User): Promise<User> {
        return await this.userService.findByEmail(userData.email);
    }

    public async login(user: User) {
        return this.validate(user).then((userData) => {
            if (!userData) {
                throw new NotFoundException('User not found');
            }
            const payload = `${userData.name}${userData.id}`;
            const accessToken = this.jwtService.sign(payload);

            return {
                expiresIn: 3600,
                accessToken,
                userId: payload,
                status: 200,
            };

        });
    }

    public async register(user: User): Promise<any> {
        return this.userService.create(user);
    }
}
