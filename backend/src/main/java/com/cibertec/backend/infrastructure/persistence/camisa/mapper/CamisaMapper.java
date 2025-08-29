package com.cibertec.backend.infrastructure.persistence.camisa.mapper;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.valueobject.CamisaCreateCommand;
import com.cibertec.backend.infrastructure.persistence.camisa.entity.CamisaEntity;
import com.cibertec.backend.infrastructure.persistence.camisa.projection.CamisaProjection;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Builder;

@Mapper(componentModel = "spring")
public interface CamisaMapper {

//    @Mappings({
//            @Mapping(target = "camisaId",    source = "id"),
//            @Mapping(target = "marcaId",     source = "marcaId"),
//            @Mapping(target = "estanteId",   source = "estanteId"),
//            @Mapping(target = "precioCosto", source = "precioCosto"),
//            @Mapping(target = "precioVenta", source = "precioVenta"),
//            @Mapping(target = "marca",       ignore = true),
//            @Mapping(target = "estante",     ignore = true)
//    })
//    CamisaModel map(CamisaEntity entity);
//

//    @Mappings({
//            @Mapping(target = "camisaId",    source = "id"),
//            @Mapping(target = "marcaId",     source = "marcaId"),
//            @Mapping(target = "estanteId",   source = "estanteId"),
//            @Mapping(target = "precioCosto", source = "precioCosto"),
//            @Mapping(target = "precioVenta", source = "precioVenta"),
//            @Mapping(target = "marca",       ignore = true),
//            @Mapping(target = "estante",     ignore = true)
//    })
    CamisaModel projectionMap(CamisaProjection projection);
//
//
//    @Mappings({
//            @Mapping(target = "camisaId", ignore = true),
//            @Mapping(target = "descripcion", source = "cmd.descripcion"),
//            @Mapping(target = "marcaId",     source = "cmd.id_marca"),
//            @Mapping(target = "color",       source = "cmd.color"),
//            @Mapping(target = "talla",       source = "cmd.talla"),
//            @Mapping(target = "manga",       source = "cmd.manga"),
//            @Mapping(target = "stock",       source = "cmd.stock"),
//            @Mapping(target = "precioCosto", source = "cmd.precio_costo"),
//            @Mapping(target = "precioVenta", source = "cmd.precio_venta"),
//            @Mapping(target = "estanteId",   source = "cmd.id_estante"),
//            @Mapping(target = "estado",      source = "cmd.estado"),
//            // revisar
//            @Mapping(target = "usuarioCreacion",     ignore = true),
//            @Mapping(target = "usuarioActualizacion", ignore = true),
//            @Mapping(target = "fechaCreacion",       ignore = true),
//            @Mapping(target = "fechaActualizacion",   ignore = true)
//    })
//    CamisaEntity entityMap(CamisaCreateCommand cmd, String usuario);
}
