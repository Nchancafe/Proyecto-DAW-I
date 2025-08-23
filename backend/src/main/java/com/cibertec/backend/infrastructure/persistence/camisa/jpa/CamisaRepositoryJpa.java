package com.cibertec.backend.infrastructure.persistence.camisa.jpa;

import com.cibertec.backend.infrastructure.persistence.camisa.entity.CamisaEntity;
import com.cibertec.backend.infrastructure.persistence.camisa.projection.CamisaProjection;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CamisaRepositoryJpa extends JpaRepository<CamisaEntity, Long> {

    Optional<CamisaEntity> findByDescripcionAndColorAndTallaAndManga(
            String descripcion,
            String color,
            String talla,
            String manga
    );

    @Query(value = """
            SELECT c.id as id,
                   c.descripcion as descripcion,
                   c.marcaId as marcaId,
                   m.descripcion as marca,
                   c.color as color,
                   c.talla as talla,
                   c.manga as manga,
                   c.stock as stock,
                   c.precioCosto as precioCosto,
                   c.precioVenta as precioVenta,
                   c.estanteId as estanteId,
                   e.descripcion as estante,
                   c.estado as estado
            FROM CamisaEntity c
            LEFT JOIN MarcaEntity m ON c.marcaId = m.id
            LEFT JOIN EstanteEntity e ON c.estanteId = e.id
            """)
    Page<CamisaProjection> findAllCamisas(Pageable pageable);
}
