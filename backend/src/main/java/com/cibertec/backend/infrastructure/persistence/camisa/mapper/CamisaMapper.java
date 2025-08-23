package com.cibertec.backend.infrastructure.persistence.camisa.mapper;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.infrastructure.persistence.camisa.projection.CamisaProjection;
import org.springframework.web.bind.annotation.Mapping;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CamisaMapper {

//    @Mapping(target = "camisaId", source = "id")
//    @Mapping(target = "descripcion", source = "descripcion")
//    @Mapping(target = "marcaId", source = "marcaId")
//    @Mapping(target = "marca", source = "marca")
//    @Mapping(target = "color", source = "color")
//    @Mapping(target = "talla", source = "talla")
//    @Mapping(target = "manga", source = "manga")
//    @Mapping(target = "stock", source = "stock")
//    @Mapping(target = "precioCosto", source = "precioCosto")
//    @Mapping(target = "precioVenta", source = "precioVenta")
//    @Mapping(target = "estanteId", source = "estanteId")
//    @Mapping(target = "estante", source = "estante")
//    @Mapping(target = "estado", source = "estado")
    CamisaModel projectionMap(CamisaProjection projection);
}
