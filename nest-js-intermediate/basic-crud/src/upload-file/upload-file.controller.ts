import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('upload-file')
export class UploadFileController {
    @Post('')
    @UseInterceptors(FileInterceptor('file',{
        storage:diskStorage({
            destination:'./uploads',
            filename:(req,file,cb)=>{
                cb(null,file.originalname)
            }
        })
    }))
    fileUpload(@UploadedFile() file:Express.Multer.File){
        console.log(file)
    }
}
