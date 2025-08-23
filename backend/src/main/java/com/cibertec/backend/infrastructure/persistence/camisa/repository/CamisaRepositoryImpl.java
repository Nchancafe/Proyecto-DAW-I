package com.cibertec.backend.infrastructure.persistence.camisa.repository;


import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.repository.CamisaRepository;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;
import com.cibertec.backend.infrastructure.persistence.camisa.jpa.CamisaRepositoryJpa;
import com.cibertec.backend.infrastructure.persistence.camisa.mapper.CamisaMapper;
import com.cibertec.backend.infrastructure.persistence.camisa.projection.CamisaProjection;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CamisaRepositoryImpl implements CamisaRepository {

    private final CamisaRepositoryJpa camisaRepositoryJpa;
    private final CamisaMapper camisaMapper;


    @Override
    public PaginaResult<CamisaModel> listarCamisas(PaginacionRequest paginacion) {
        Pageable pageable = createPageable(paginacion);
        Page<CamisaProjection> page = camisaRepositoryJpa.findAllCamisas(pageable);

        List<CamisaModel> camisas = page.getContent()
                .stream()
                .map(camisaMapper::projectionMap)
                .toList();

        return PaginaResult.of(
                camisas,
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
