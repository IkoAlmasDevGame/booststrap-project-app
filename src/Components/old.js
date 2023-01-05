import {Card, CardImg} from 'react-bootstrap';
import {Link} from 'react-daisyui';

import bencanaalam from '../Assets/old/bencanaAlam.jpg';
import geologiugm from '../Assets/old/geologiugm.jpg';

function OldNews(){
    return(
        <div>
            <header
            style={{paddingTop : "auto", margin : "auto"}}>
                <h2
                id='terlama'
                className='text-center items-center me-0'
                style={{fontSize:"18px", fontWeight:"500"}}> Berita Lama</h2>
                <Card>
                    <CardImg 
                    src={bencanaalam}
                    alt='Bencana Alam'
                    style={{width : "247px", height : "204px", margin : "auto", 
                    marginTop : "5px", border : "solid 1px"}}
                    />
                    <Card.Header>
                        <Card.Title className='text-center fw-normal'>Berkaca Bencana Alam Sepanjang 2022, Akademisi Geologi Unpad: Kemampuan Mitigasi Bencana Perlu Ditingkatkan</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className='fw-normal'>
                        Sepanjang tahun 2022, Indonesia tak lepas dari berbagai bencana alam. 
                        "Sebagai negara yang sering menjadi langganan bencana alam, upaya mitigasi di Indonesia masih tergolong rendah," 
                        kata Mohammad Sapari Dwi Hadian, akademisi  Fakultas Teknik Geologi (FTG) Universitas Padjadjaran (Unpad). 
                        Tidak semua masyarakat di seluruh daerah nusantara paham dengan apa yang harus dilakukan ketika dihadapkan pada situasi bencana.
                        Berikut adalah beberapa hal yang dapat diperhatikan sebagai upaya persiapan dan pengurangan dampak jika terjadi 
                        bencana menurut Mohammad Sapari Dwi Hadian manajer riset dan inovasi di Fakultas Teknik Geologi Unpad kepada Tempo.co.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link
                        href='https://nasional.tempo.co/read/1674359/berkaca-bencana-alam-sepanjang-2022-akademisi-geologi-unpad-kemampuan-mitigasi-bencana-perlu-ditingkatkan' 
                        className='btn btn-primary' color='white'>Baca Lebih Lanjut</Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <CardImg 
                    src={geologiugm}
                    alt='Bencana Alam'
                    style={{width : "247px", height : "204px", margin : "auto", 
                    marginTop : "5px", border : "solid 1px"}}
                    />
                    <Card.Header>
                        <Card.Title className='text-center fw-normal'>Ahli Geomorfologi UGM: Perhatikan Potensi Bencana Akhir Tahun</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className='fw-normal'>
                        Akhir tahun menjadi momen paling dinanti bagi hampir seluruh masyarakat. 
                        Mobilisasi lalu lintas ke tempat-tempat wisata bisa dipastikan akan mencapai puncaknya pada 31 Desember 2022. 
                        Sayangnya, fenomena akhir tahun ini justru dapat meningkatkan risiko dari dampak potensi bencana yang bisa terjadi. 
                        Ahli Geomorfologi Universitas Gadjah Mada (UGM) Muhammad Anggri Setiawan mengungkapkan suatu bencana dilihat dari risikonya. 
                        “Kebencanaan itu bisa dilihat dari risikonya. Risiko menjelang akhir tahun itu akan tinggi karena semakin banyak orang berkumpul di tempat-tempat wisata dalam jumlah yang besar dan mobilitasnya tinggi,” 
                        tutur dosen Fakultas Geografi UGM ini pada Jumat, 30 Desember 2022.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link
                        href='https://tekno.tempo.co/read/1673856/ahli-geomorfologi-ugm-perhatikan-potensi-bencana-akhir-tahun' 
                        className='btn btn-primary' color='white'>Baca Lebih Lanjut</Link>
                    </Card.Footer>
                </Card>
            </header>
        </div>
    );
}

export default OldNews