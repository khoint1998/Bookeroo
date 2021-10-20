package com.rmit.sept.bk_loginservices.Repositories;

import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RegistrationRepository extends CrudRepository<RegistrationDetails, Long> {
    RegistrationDetails getByRegistrationId(Long regId);
    RegistrationDetails getByCopyId(Long copyId);
    List<RegistrationDetails> findAll();
}
