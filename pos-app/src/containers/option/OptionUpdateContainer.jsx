import React, { useEffect, useState } from 'react';
import OptionUpdate from '../../components/option/OptionUpdate';
import { useNavigate, useParams } from 'react-router-dom';
import * as options from '../../apis/option';

const OptionUpdateContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [option, setOption] = useState([]);

    const getOption = async () => {
        const response = await options.read(id);
        const data = response.data;
        const status = response.status
        // console.log(data);
        if (status == 200) {
            setOption(data);
        }
    };

    const optionUpdate = async (formData, headers) => {
        try {
            const response = await options.update(formData, headers);
            const data = response.data;
            const status = response.status
            if (status == 200) {
                alert('수정 완료');
                navigate('/options');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const optionDelete = async (id) => {
        try {
            const response = await options.remove(id);
            const data = await response.data;
            const status = response.status
            if (status == 200) {
                alert('삭제 완료');
                navigate('/options');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOption();
    }, []);

    return (
        <OptionUpdate
            option={option}
            optionUpdate={optionUpdate}
            optionDelete={optionDelete}
        />
    );
};

export default OptionUpdateContainer;
