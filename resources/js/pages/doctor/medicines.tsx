import React from 'react'
import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import EditMedicineModal from '../../components/edit-medicine-modal';


const Medicine = ({ medicines }) => {

    const [name, setName] = React.useState('');
    const [packaging, setPackaging] = React.useState('');
    const [price, setPrice] = React.useState('');

    function onSubmit(e) {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted with data:", { name, packaging, price });
        router.post("/medicines", {
            name: name,
            packaging: packaging,
            price: price,
        });
        setName('');
        setPackaging('');
        setPrice('');
    }

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="min-h-screen">
                <div className="w-11/12 m-auto flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold mb-2">Form Input Obat</h1>
                </div>
                <div className="**:static !rounded-md overflow-hidden w-1/3 ml-16 mb-8">
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Nama Obat" className="border border-gray-300 rounded-md p-2" onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Kemasan" className="border border-gray-300 rounded-md p-2" onChange={(e) => setPackaging(e.target.value)} />
                        <input type="text" placeholder="Harga" className="border border-gray-300 rounded-md p-2" onChange={(e) => setPrice(e.target.value)}/>
                        <button onClick={onSubmit} type="button" className="bg-blue-500 text-white rounded-md p-2">Simpan</button>
                    </form>
                </div>
                <div className="w-11/12 m-auto flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Daftar Obat</h1>
                </div>
                <div className="w-11/12 m-auto **:static !rounded-md overflow-hidden">
                    <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <TableHead>
                            <TableHeadCell className='!py-2'>Nama</TableHeadCell>
                            <TableHeadCell className='!py-2'>Kemasan</TableHeadCell>
                            <TableHeadCell>Harga</TableHeadCell>
                            <TableHeadCell>Aksi</TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y " >
                            {
                                medicines.map((medicine) => (
                                    <TableRow key={medicine.id} className="bg-white dark:border-gray-700 dark:bg-gray-900">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {medicine.name}
                                        </TableCell>
                                        <TableCell>{medicine.packaging}</TableCell>
                                        <TableCell className='!py-2'>{medicine.price}</TableCell>
                                        <TableCell className='!py-2 flex gap-2'>
                                            <EditMedicineModal id={medicine.id} name={medicine.name} packaging={medicine.packaging} price={medicine.price}></EditMedicineModal>
                                            <button onClick={() => router.delete(`/medicines/${medicine.id}`)} className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer ml-2">
                                                Hapus
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}

export default Medicine
