package learn.portfolio_man.models.YahooFinance;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class StockProfile {

    private String address1;
    private String city;
    private String state;
    private String zip;
    private String country;
    private String phone;
    private String website;
    private String industry;
    private String industryKey;
    private String industryDisp;
    private String sector;
    private String sectorKey;
    private String sectorDisp;
    private String longBusinessSummary;
    private int fullTimeEmployees;

    public StockProfile() {
    }

    public StockProfile(String city, String state, String zip, String country, String phone, String website,
            String industry, String industryKey, String industryDisp, String sector, String sectorKey, String address1,
            String sectorDisp, String longBusinessSummary, int fullTimeEmployees) {
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.phone = phone;
        this.website = website;
        this.industry = industry;
        this.industryKey = industryKey;
        this.industryDisp = industryDisp;
        this.sector = sector;
        this.sectorKey = sectorKey;
        this.address1 = address1;
        this.sectorDisp = sectorDisp;
        this.longBusinessSummary = longBusinessSummary;
        this.fullTimeEmployees = fullTimeEmployees;
    }

    @Override
    public String toString() {
        return "StockProfile{address1=" + address1 + ", city=" + city + ", state=" + state + ", zip=" + zip
                + ", country=" + country + ", phone=" + phone + ", website=" + website + ", industryKey=" + industryKey
                + ", industryDisp=" + industryDisp + ", sector=" + sector + ", sectorKey=" + sectorKey + ", sectorDisp="
                + sectorDisp + ", longBusinessSummary=" + longBusinessSummary + ", fullTimeEmployees="
                + fullTimeEmployees + "}";
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getIndustryKey() {
        return industryKey;
    }

    public void setIndustryKey(String industryKey) {
        this.industryKey = industryKey;
    }

    public String getIndustryDisp() {
        return industryDisp;
    }

    public void setIndustryDisp(String industryDisp) {
        this.industryDisp = industryDisp;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getSectorKey() {
        return sectorKey;
    }

    public void setSectorKey(String sectorKey) {
        this.sectorKey = sectorKey;
    }

    public String getSectorDisp() {
        return sectorDisp;
    }

    public void setSectorDisp(String sectorDisp) {
        this.sectorDisp = sectorDisp;
    }

    public String getLongBusinessSummary() {
        return longBusinessSummary;
    }

    public void setLongBusinessSummary(String longBusinessSummary) {
        this.longBusinessSummary = longBusinessSummary;
    }

    public int getFullTimeEmployees() {
        return fullTimeEmployees;
    }

    public void setFullTimeEmployees(int fullTimeEmployees) {
        this.fullTimeEmployees = fullTimeEmployees;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((address1 == null) ? 0 : address1.hashCode());
        result = prime * result + ((city == null) ? 0 : city.hashCode());
        result = prime * result + ((state == null) ? 0 : state.hashCode());
        result = prime * result + ((zip == null) ? 0 : zip.hashCode());
        result = prime * result + ((country == null) ? 0 : country.hashCode());
        result = prime * result + ((phone == null) ? 0 : phone.hashCode());
        result = prime * result + ((website == null) ? 0 : website.hashCode());
        result = prime * result + ((industry == null) ? 0 : industry.hashCode());
        result = prime * result + ((industryKey == null) ? 0 : industryKey.hashCode());
        result = prime * result + ((industryDisp == null) ? 0 : industryDisp.hashCode());
        result = prime * result + ((sector == null) ? 0 : sector.hashCode());
        result = prime * result + ((sectorKey == null) ? 0 : sectorKey.hashCode());
        result = prime * result + ((sectorDisp == null) ? 0 : sectorDisp.hashCode());
        result = prime * result + ((longBusinessSummary == null) ? 0 : longBusinessSummary.hashCode());
        result = prime * result + fullTimeEmployees;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        StockProfile other = (StockProfile) obj;
        if (address1 == null) {
            if (other.address1 != null) {
                return false;
            }
        } else if (!address1.equals(other.address1)) {
            return false;
        }
        if (city == null) {
            if (other.city != null) {
                return false;
            }
        } else if (!city.equals(other.city)) {
            return false;
        }
        if (state == null) {
            if (other.state != null) {
                return false;
            }
        } else if (!state.equals(other.state)) {
            return false;
        }
        if (zip == null) {
            if (other.zip != null) {
                return false;
            }
        } else if (!zip.equals(other.zip)) {
            return false;
        }
        if (country == null) {
            if (other.country != null) {
                return false;
            }
        } else if (!country.equals(other.country)) {
            return false;
        }
        if (phone == null) {
            if (other.phone != null) {
                return false;
            }
        } else if (!phone.equals(other.phone)) {
            return false;
        }
        if (website == null) {
            if (other.website != null) {
                return false;
            }
        } else if (!website.equals(other.website)) {
            return false;
        }
        if (industry == null) {
            if (other.industry != null) {
                return false;
            }
        } else if (!industry.equals(other.industry)) {
            return false;
        }
        if (industryKey == null) {
            if (other.industryKey != null) {
                return false;
            }
        } else if (!industryKey.equals(other.industryKey)) {
            return false;
        }
        if (industryDisp == null) {
            if (other.industryDisp != null) {
                return false;
            }
        } else if (!industryDisp.equals(other.industryDisp)) {
            return false;
        }
        if (sector == null) {
            if (other.sector != null) {
                return false;
            }
        } else if (!sector.equals(other.sector)) {
            return false;
        }
        if (sectorKey == null) {
            if (other.sectorKey != null) {
                return false;
            }
        } else if (!sectorKey.equals(other.sectorKey)) {
            return false;
        }
        if (sectorDisp == null) {
            if (other.sectorDisp != null) {
                return false;
            }
        } else if (!sectorDisp.equals(other.sectorDisp)) {
            return false;
        }
        if (longBusinessSummary == null) {
            if (other.longBusinessSummary != null) {
                return false;
            }
        } else if (!longBusinessSummary.equals(other.longBusinessSummary)) {
            return false;
        }
        if (fullTimeEmployees != other.fullTimeEmployees) {
            return false;
        }
        return true;
    }

}
