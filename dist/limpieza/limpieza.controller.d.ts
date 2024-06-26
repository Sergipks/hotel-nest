/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { LimpiezaService } from './limpieza.service';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';
import { Limpieza } from './entities/limpieza.entity';
export declare class LimpiezaController {
    private readonly limpiezaService;
    constructor(limpiezaService: LimpiezaService);
    create(createLimpiezaDto: CreateLimpiezaDto): Promise<import("mongoose").Document<unknown, {}, Limpieza> & Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAllByRoomId(id: string): Promise<Limpieza[]>;
    update(id: string, updateLimpiezaDto: UpdateLimpiezaDto): Promise<Limpieza>;
    checkLimpiezaToday(id: string): Promise<{
        ok: boolean;
    }>;
    getHabitacionesLimpiasHoy(): Promise<Habitacion[]>;
}
