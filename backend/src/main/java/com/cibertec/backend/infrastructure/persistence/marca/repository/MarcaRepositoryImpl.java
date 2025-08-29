package com.cibertec.backend.infrastructure.persistence.marca.repository;

import com.cibertec.backend.domain.marca.valueobject.PaginaResult;
import com.cibertec.backend.domain.marca.model.MarcaModel;
import com.cibertec.backend.domain.marca.repository.MarcaRepository;
import com.cibertec.backend.domain.marca.valueobject.PaginacionRequest;
import com.cibertec.backend.infrastructure.persistence.marca.jpa.MarcaRepositoryJpa;
import com.cibertec.backend.infrastructure.persistence.marca.projection.MarcaProjection;
import com.cibertec.backend.infrastructure.persistence.marca.mapper.MarcaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MarcaRepositoryImpl implements MarcaRepository {

    private final MarcaRepositoryJpa marcaRepositoryJpa;
    private final MarcaMapper marcaMapper;

    @Override
    public PaginaResult<MarcaModel> listarMarcas(PaginacionRequest paginacion) {
        Pageable pageable = createPageable(paginacion);
        Page<MarcaProjection> page = marcaRepositoryJpa.findAllMarcas(pageable);

        List<MarcaModel> marcas = page.getContent()
                .stream()
                .map(marcaMapper::projectionMap)
                .toList();

        return PaginaResult.of(
                marcas,
                page.getNumber(),
                page.getSize(),
                page.getTotalElements()
        );
    }

    private Pageable createPageable(PaginacionRequest paginacion) {
        Sort sort = paginacion.isAscendente() ?
                Sort.by(paginacion.getOrdenarPor()).ascending() :
                Sort.by(paginacion.getOrdenarPor()).descending();

        return PageRequest.of(paginacion.getPagina(), paginacion.getTamanio(), sort);
    }

}
