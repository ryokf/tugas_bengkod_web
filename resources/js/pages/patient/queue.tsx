import React from 'react'
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const Queue = ({ checkups }) => {
    return (
        <AppLayout>
            <Head title="Queue"></Head>
            <div className="">

                <h1 className="text-3xl font-semibold mb-4 ml-4">Antrean Anda</h1>
                <h2 className="text-xl mb-4 ml-4">Harap perhatikan waktu janji dengan dokter !</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {
                        checkups.length > 0 ? (
                            checkups.map((checkup) => (
                                <div key={checkup.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-white">{checkup.doctor.name}</h3>
                                    <p className="text-gray-400 mt-2">Tanggal: {checkup.checkup_date}</p>
                                    <p className="text-gray-400 mt-2">Catatan: {checkup.note}</p>
                                </div>
                            ))
                        ) : (
                            <div className="text-center p-8 rounded-lg bg-gray-800">
                                <p className="text-gray-400 mt-2">Anda tidak memiliki antrian saat ini.</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </AppLayout>
    )
}

export default Queue
