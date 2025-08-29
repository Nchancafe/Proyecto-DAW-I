package com.cibertec.backend.presentation.camisa.mapper;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.valueobject.CamisaCreateCommand;
import com.cibertec.backend.presentation.camisa.dto.CamisaRequestDto;
import com.cibertec.backend.presentation.camisa.dto.CamisaResponseDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface CamisaDtoMapper {

    CamisaCreateCommand toCommand(CamisaRequestDto dto);

    // mapemos errores de nombre
    @Mappings({
            @Mapping(target = "id_camisa",    source = "camisaId"),
            @Mapping(target = "id_marca",     source = "marcaId"),
            @Mapping(target = "precio_costo", source = "precioCosto"),
            @Mapping(target = "precio_venta", source = "precioVenta"),
            @Mapping(target = "id_estante",   source = "estanteId")
    })
    CamisaResponseDto toResponse(CamisaModel model);
}
