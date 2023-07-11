import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomPipeService implements PipeTransform{
    transform(value: number, metadata: ArgumentMetadata) {
        console.log(value,typeof value)
        return value
    }
}
