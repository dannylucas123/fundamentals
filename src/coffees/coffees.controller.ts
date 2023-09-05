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
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  public getCoffees(
    @Query() pagination: PaginationQueryDto,
  ): Promise<Coffee[]> {
    const { limit, offset } = pagination;
    console.log(limit, offset);
    return this.coffeesService.findAll(pagination);
  }

  @Get(':id')
  public getSpecificCoffee(@Param('id') id: string): Promise<Coffee> {
    return this.coffeesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  public create(@Body() createCoffeeDto: CreateCoffeeDto): any {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  public patch(
    @Param(':id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<UpdateCoffeeDto> {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete()
  public delete(@Param(':id') id: string): void {
    return this.coffeesService.remove(id);
  }
}
