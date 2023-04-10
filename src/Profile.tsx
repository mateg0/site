import React from "react";

export default function Profile() {
    return (
        <>
            <h1 className='text-center rounded mt-5  fs-1'>Профиль</h1>
            <div className="row rounded row-cols-2 align-items-center">
                <div className="col">
                    <img src='me.jpg' alt='Me' className='d-flex mx-auto w-75 mt-5'></img>
                </div>
                <div className='col fs-2 text'>
                    Я, студент группы ИСТ-013 СПбГУТ им. Бонч-Бруевича, Матвеев Павел. Данная страница написана для лабораторной работы №5а по предмету "Архитектура информационных систем".
                </div>
            </div>
        </>
    );
}