package sistema.calendario.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sistema.calendario.entities.Calendario;

public interface CalendarioRepository extends JpaRepository<Calendario, Integer> {

}
