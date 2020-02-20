package sistema.calendario.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import sistema.calendario.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
