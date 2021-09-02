package com.rmit.sept.bk_loginservices.Repositories;

import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import org.springframework.data.repository.CrudRepository;

public interface RegistrationRepository extends CrudRepository<RegistrationDetails, Long> {
    RegistrationDetails getByRegistrationId(Long regId);
}
