import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { CheckupModal } from '../components/checkup-modal';

interface DashboardProps {
    checkups: {
        patient_id: number,
        doctor_id: number,
        checkup_date: string,
        note: string | null,
        price: number | null,
        doctor: {
            id: number,
            name: string,
        },
        checkup_details: {
            id: number,
            medicine: {
                id: number,
                name: string,
                description: string | null,
                price: number | null,
            },
        }[];
    }[]; // Replace 'any[]' with the actual type of 'checkups' if known
}

export default function Dashboard({ checkups }: DashboardProps) {
    console.log(checkups)

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="min-h-screen">
                <div className="w-11/12 m-auto flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold mb-4">Riwayat periksa</h1>
                    <div className="flex items-center gap-2">
                        <CheckupModal></CheckupModal>
                    </div>
                </div>
                <div className="w-11/12 m-auto **:static !rounded-md overflow-hidden">
                    <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <TableHead>
                            <TableHeadCell className='!py-2'>Tanggal</TableHeadCell>
                            <TableHeadCell className='!py-2'>Nama Dokter</TableHeadCell>
                            <TableHeadCell>Catatan</TableHeadCell>
                            <TableHeadCell>Biaya</TableHeadCell>
                            <TableHeadCell>Obat</TableHeadCell>

                        </TableHead>

                        <TableBody className="divide-y " >
                            {
                                checkups.map((checkup) => (
                                    <TableRow key={checkup.patient_id} className="bg-white dark:border-gray-700 dark:bg-gray-900">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {checkup.checkup_date}
                                        </TableCell>
                                        <TableCell>{checkup.doctor.name}</TableCell>
                                        <TableCell className='!py-2'>{checkup.note}</TableCell>
                                        <TableCell>{checkup.price}</TableCell>
                                        <TableCell className='!py-2'>
                                            {
                                                checkup.checkup_details.length === 0 ? (
                                                    <li className="text-sm font-semibold list-none">Tidak butuh obat</li>
                                                ) : null
                                            }
                                            <ul className=''>
                                                {
                                                    checkup.checkup_details.map((detail) => (
                                                        <li key={detail.id} className="flex items-center gap-2 ">
                                                            - {detail.medicine.name}
                                                            {/* {detail.medicine.price} */}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
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
