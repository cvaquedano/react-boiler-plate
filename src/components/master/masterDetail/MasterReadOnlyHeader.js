import React, { useContext, useEffect } from 'react';
import MasterContext from '../../../context/masters/masterContext';

const MasterReadOnlyHeader = () => {

    const masterContext = useContext(MasterContext);
    const {master, masterStatus, getMasterStatusById} = masterContext;

    const {name, dob, masterStatusEntityId, gender } = master;

    useEffect(()=> {
        getMasterStatusById(masterStatusEntityId)
        // eslint-disable-next-line
    },[]);

    const {value}= masterStatus;
    return (
        <div class="form-group">
            <fieldset>
            <label class="control-label" for="name">Name</label>
            <input class="form-control capitalize" id="name" type="text" value={name} readonly=""/>
            </fieldset>
            <fieldset>
            <label class="control-label" for="dob">DOB</label>
            <input class="form-control" id="dob" type="text" value={dob.slice(0,10)} readonly=""/>
            </fieldset>
            <fieldset>
            <label class="control-label" for="gender">Gender</label>
            <input class="form-control" id="gender" type="text" value={ gender? "Male" : "Female"} readonly=""/>
            </fieldset>
            <fieldset>
            <label class="control-label" for="status">Status</label>
            <input class="form-control" id="status" type="text" value={value ?? null } readonly=""/>
            </fieldset>
      </div>
    );
};

export default MasterReadOnlyHeader;