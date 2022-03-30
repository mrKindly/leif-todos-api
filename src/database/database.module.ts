import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    // imports: [
    //     TypeOrmModule.forRootAsync({
    //         imports: [ConfigModule],
    //         inject: [ConfigService],
    //         useFactory: () => ({
    //             type: 'postgres',
    //             host: 'ec2-99-80-170-190.eu-west-1.compute.amazonaws.com',
    //             port: '5432',
    //             username: 'drmyzfxapivjsj',
    //             password: 'c6a8764ae5ff559c18a523d2702f4283084a39d85e6fa806cc2283f5819c1e17',
    //             database: 'dekeergv271vef',
    //             extra: {
    //                 ssl: {
    //                   rejectUnauthorized: false,
    //                 },
    //               },
    //             // entities: [
    //             //     __dirname + '/../**/*.entity.ts',
    //             // ],
    //             // synchronize: true,
    //         })
    //     }),
    // ],
})
export class DatabaseModule { }