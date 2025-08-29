package com.cibertec.backend.infrastructure.persistence.marca.mapper;

import com.cibertec.backend.domain.marca.model.MarcaModel;
import com.cibertec.backend.infrastructure.persistence.marca.projection.MarcaProjection;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MarcaMapper {
    MarcaModel projectionMap(MarcaProjection projection);
}
