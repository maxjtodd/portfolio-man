package learn.portfolio_man.models.YahooFinance;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SearchResult {

    private String shortname;
    private String quoteType;
    private String symbol;
    private String index;
    private String score;
    private String typeDisp;
    private String longname;
    private String exchDisp;
    private String sector;
    private String sectorDisp;
    private String industry;
    private String industryDisp;
    private String dispSecIndFlag;

    public SearchResult() {
    }

    public SearchResult(String shortname, String quoteType, String symbol, String index, String score, String typeDisp,
            String longname, String exchDisp, String sector, String sectorDisp, String industry, String industryDisp,
            String dispSecIndFlag) {
        this.shortname = shortname;
        this.quoteType = quoteType;
        this.symbol = symbol;
        this.index = index;
        this.score = score;
        this.typeDisp = typeDisp;
        this.longname = longname;
        this.exchDisp = exchDisp;
        this.sector = sector;
        this.sectorDisp = sectorDisp;
        this.industry = industry;
        this.industryDisp = industryDisp;
        this.dispSecIndFlag = dispSecIndFlag;
    }

    @Override
    public String toString() {
        return "SearchResult{shortname=" + shortname + ", quoteType=" + quoteType + ", symbol=" + symbol + ", index="
                + index + ", score=" + score + ", typeDisp=" + typeDisp + ", longname=" + longname + ", exchDisp="
                + exchDisp + ", sector=" + sector + ", sectorDisp=" + sectorDisp + ", industry=" + industry
                + ", industryDisp=" + industryDisp + ", dispSecIndFlag=" + dispSecIndFlag + "}";
    }

    public String getShortname() {
        return shortname;
    }

    public void setShortname(String shortname) {
        this.shortname = shortname;
    }

    public String getQuoteType() {
        return quoteType;
    }

    public void setQuoteType(String quoteType) {
        this.quoteType = quoteType;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public String getTypeDisp() {
        return typeDisp;
    }

    public void setTypeDisp(String typeDisp) {
        this.typeDisp = typeDisp;
    }

    public String getLongname() {
        return longname;
    }

    public void setLongname(String longname) {
        this.longname = longname;
    }

    public String getExchDisp() {
        return exchDisp;
    }

    public void setExchDisp(String exchDisp) {
        this.exchDisp = exchDisp;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getSectorDisp() {
        return sectorDisp;
    }

    public void setSectorDisp(String sectorDisp) {
        this.sectorDisp = sectorDisp;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getIndustryDisp() {
        return industryDisp;
    }

    public void setIndustryDisp(String industryDisp) {
        this.industryDisp = industryDisp;
    }

    public String getDispSecIndFlag() {
        return dispSecIndFlag;
    }

    public void setDispSecIndFlag(String dispSecIndFlag) {
        this.dispSecIndFlag = dispSecIndFlag;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((shortname == null) ? 0 : shortname.hashCode());
        result = prime * result + ((quoteType == null) ? 0 : quoteType.hashCode());
        result = prime * result + ((symbol == null) ? 0 : symbol.hashCode());
        result = prime * result + ((index == null) ? 0 : index.hashCode());
        result = prime * result + ((score == null) ? 0 : score.hashCode());
        result = prime * result + ((typeDisp == null) ? 0 : typeDisp.hashCode());
        result = prime * result + ((longname == null) ? 0 : longname.hashCode());
        result = prime * result + ((exchDisp == null) ? 0 : exchDisp.hashCode());
        result = prime * result + ((sector == null) ? 0 : sector.hashCode());
        result = prime * result + ((sectorDisp == null) ? 0 : sectorDisp.hashCode());
        result = prime * result + ((industry == null) ? 0 : industry.hashCode());
        result = prime * result + ((industryDisp == null) ? 0 : industryDisp.hashCode());
        result = prime * result + ((dispSecIndFlag == null) ? 0 : dispSecIndFlag.hashCode());
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
        SearchResult other = (SearchResult) obj;
        if (shortname == null) {
            if (other.shortname != null) {
                return false;
            }
        } else if (!shortname.equals(other.shortname)) {
            return false;
        }
        if (quoteType == null) {
            if (other.quoteType != null) {
                return false;
            }
        } else if (!quoteType.equals(other.quoteType)) {
            return false;
        }
        if (symbol == null) {
            if (other.symbol != null) {
                return false;
            }
        } else if (!symbol.equals(other.symbol)) {
            return false;
        }
        if (index == null) {
            if (other.index != null) {
                return false;
            }
        } else if (!index.equals(other.index)) {
            return false;
        }
        if (score == null) {
            if (other.score != null) {
                return false;
            }
        } else if (!score.equals(other.score)) {
            return false;
        }
        if (typeDisp == null) {
            if (other.typeDisp != null) {
                return false;
            }
        } else if (!typeDisp.equals(other.typeDisp)) {
            return false;
        }
        if (longname == null) {
            if (other.longname != null) {
                return false;
            }
        } else if (!longname.equals(other.longname)) {
            return false;
        }
        if (exchDisp == null) {
            if (other.exchDisp != null) {
                return false;
            }
        } else if (!exchDisp.equals(other.exchDisp)) {
            return false;
        }
        if (sector == null) {
            if (other.sector != null) {
                return false;
            }
        } else if (!sector.equals(other.sector)) {
            return false;
        }
        if (sectorDisp == null) {
            if (other.sectorDisp != null) {
                return false;
            }
        } else if (!sectorDisp.equals(other.sectorDisp)) {
            return false;
        }
        if (industry == null) {
            if (other.industry != null) {
                return false;
            }
        } else if (!industry.equals(other.industry)) {
            return false;
        }
        if (industryDisp == null) {
            if (other.industryDisp != null) {
                return false;
            }
        } else if (!industryDisp.equals(other.industryDisp)) {
            return false;
        }
        if (dispSecIndFlag == null) {
            if (other.dispSecIndFlag != null) {
                return false;
            }
        } else if (!dispSecIndFlag.equals(other.dispSecIndFlag)) {
            return false;
        }
        return true;
    }

}
