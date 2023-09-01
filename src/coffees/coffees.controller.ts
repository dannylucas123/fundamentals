import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  public getCoffees(@Query() pagination): string {
    const { limit, offset } = pagination;
    console.log(limit, offset);
    return 'Cofveve';
  }

  @Get(':id')
  public getSpecificCoffee(@Param('id') id: string): string {
    return id;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  public create(@Body() body): any {
    return body;
  }

  @Patch(':id')
  public patch(@Param(':id') id: string, @Body() body): string {
    console.log(body);
    return id;
  }

  @Put()
  public update(@Param(':id') id: string, @Body() body): string {
    console.log(body);
    return id;
  }

  @Delete()
  public delete(@Param(':id') id: string): string {
    console.log(id);
    return 'Removed!';
  }
}
