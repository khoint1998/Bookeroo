package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.model.PurchaseDetailsDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class PurchaseDetailsDTOTest {

    @Test
    @Rollback
    public void setCopyId_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "1";
        purchaseDetailsDTO.setCopyId(expect);
        String actual = purchaseDetailsDTO.getCopyId();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setTitle_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "java concept";
        purchaseDetailsDTO.setTitle(expect);
        String actual = purchaseDetailsDTO.getTitle();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setSellerId_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "1";
        purchaseDetailsDTO.setSellerId(expect);
        String actual = purchaseDetailsDTO.getSellerId();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setSellerFullName_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "chen wang";
        purchaseDetailsDTO.setSellerFullName(expect);
        String actual = purchaseDetailsDTO.getSellerFullName();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setPrice_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "100";
        purchaseDetailsDTO.setPrice(expect);
        String actual = purchaseDetailsDTO.getPrice();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getCopyId_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "1";
        purchaseDetailsDTO.setCopyId(expect);
        String actual = purchaseDetailsDTO.getCopyId();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getTitle_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "java concept";
        purchaseDetailsDTO.setTitle(expect);
        String actual = purchaseDetailsDTO.getTitle();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getSellerId_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "1";
        purchaseDetailsDTO.setSellerId(expect);
        String actual = purchaseDetailsDTO.getSellerId();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getSellerFullName_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "chen wang";
        purchaseDetailsDTO.setSellerFullName(expect);
        String actual = purchaseDetailsDTO.getSellerFullName();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getPrice_test() {
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        String expect = "100";
        purchaseDetailsDTO.setPrice(expect);
        String actual = purchaseDetailsDTO.getPrice();
        assertThat(actual).isEqualTo(expect);
    }
}
