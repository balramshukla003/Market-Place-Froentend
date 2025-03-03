import "../css/JobsFilters.css";
import FilteredJobs from './FilteredJobs';
import React, { useEffect, useState } from 'react';

const JobsFilters = () => {

  const [selectedFilters, setSelectedFilters] = useState({
    work_mode: [],
    department: [],
    industry: [],
    company: [],
    location: [],
  });

  const filterGroups = {
    work_mode: [
      { id: "wm1", label: "WFH" },
      { id: "wm2", label: "Part-time" },
      { id: "wm3", label: "Full-time" },
      { id: "wm4", label: "Remote" },
      { id: "wm5", label: "Internship" },
    ],
    industry: [
      { id: "in1", label: "IT Services" },
      { id: "in2", label: "Development" },
      { id: "in3", label: "Technology" },
      { id: "in4", label: "Data Scientist" },
      { id: "in5", label: "Analytics / Research" },
      { id: "in6", label: "Security Services" },
      { id: "in7", label: "Interior Design" },
      { id: "in8", label: "Recruitment / Staffing" },
      { id: "in9", label: "Accounting / Auditing" },
      { id: "in10", label: "Management Services" },
    ],
  };

  const filterGroups2 = {
    company: [
      { id: "c1", label: "Google" },
      { id: "c2", label: "Apple" },
      { id: "c3", label: "Microsoft" },
      { id: "c4", label: "Amazon" },
      { id: "c5", label: "Facebook" },
      { id: "c6", label: "Tesla" },
      { id: "c7", label: "Netflix" },
      { id: "c8", label: "Adobe" },
      { id: "c9", label: "IBM" },
      { id: "c10", label: "Salesforce" },
    ],
    location: [
      { id: "lo1", label: "Delhi" },
      { id: "lo2", label: "Mumbai" },
      { id: "lo3", label: "Bangalore" },
      { id: "lo4", label: "Chennai" },
      { id: "lo5", label: "Kolkata" },
      { id: "lo6", label: "Hyderabad" },
      { id: "lo7", label: "Noida" },
      { id: "lo8", label: "Gurugram" },
    ],
  };

  const handleCheckboxChange = (group, id, checked) => {
    setSelectedFilters((prev) => {
      const updatedGroup = checked
        ? [...prev[group], id]
        : prev[group].filter((filterId) => filterId !== id);

      return { ...prev, [group]: updatedGroup };
    });
  };

  const updateURL = () => {
    const params = new URLSearchParams();
    Object.entries(selectedFilters).forEach(([group, ids]) => {
      if (ids.length > 0) {
        params.append(group, ids.join(","));
      }
    });
    window.history.pushState({}, "", `?${params.toString()}`);
  };


  useEffect(() => {
    updateURL();
  }, [selectedFilters]);

  return (
    <div className="job_search">

      <div className="job_search-inner">


        <div className="filters-container" style={{ left: "50px"}}>
          {Object.entries(filterGroups).map(([group, items]) => (
            <section key={group} className="filter-box" >
              <h2>{group.replace("_", " ").toUpperCase()}</h2>
              <div className="checkbox-grp">
                {items.map((item) => (
                  <div key={item.id} className="checkbox-item" >
                    <input
                      type="checkbox"
                      checked={selectedFilters[group]?.includes(item.id)}
                      onChange={(e) =>
                        handleCheckboxChange(group, item.id, e.target.checked)
                      }
                    />
                    <label>{item.label}</label>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>







        <div className="filtered-jobs">
          <FilteredJobs />
        </div>



        <div className="filters-container" style={{ right: "50px" }}>
          {Object.entries(filterGroups2).map(([group, items]) => (
            <section key={group} className="filter-box">
              <h2>{group.replace("_", " ").toUpperCase()}</h2>
              <div className="checkbox-grp">
                {items.map((item) => (
                  <div key={item.id} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={selectedFilters[group]?.includes(item.id)}
                      onChange={(e) =>
                        handleCheckboxChange(group, item.id, e.target.checked)
                      }
                    />
                    <label>{item.label}</label>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>







      </div>


    </div>
  );
};

export default JobsFilters;
