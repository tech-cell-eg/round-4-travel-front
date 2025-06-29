import { useEffect, useState } from 'react';
import { CustomBreadCrumb } from './components/CustomBreadCrumb'
import ListItems from './components/ListItems'
import SearchItem from './components/SearchItem'
import type { Paginate, Cards } from '@/shared/reuseComponents/types';
import { getList } from "@/shared/api/getList";

function ListPage({ setDataItems }: { setDataItems: React.Dispatch<React.SetStateAction<Cards[]>> }) {
  const [data, setData] = useState<Cards[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginate, setPaginate] = useState<Paginate>({ total_pages: 0 });
  useEffect(() => {
    const url = `${import.meta.env.VITE_BASE_URL
      }tours?page=${currentPage}`;
    getList(url, setData, setPaginate, setDataItems);
  }, [currentPage]);

  //Start search
  const [contentSearch, setContentSearch] = useState<string>("");
  useEffect(() => {
    const url = `${import.meta.env.VITE_BASE_URL
      }tours?type=${contentSearch}`;
    getList(url, setData, setPaginate);
    scrollTo(0, 0)
  }, [contentSearch])

  return (
    <div className='mb-32 mt-12'>
      <div className='flex items-center justify-between'>
        <CustomBreadCrumb />
        <p className='text-primaryDesign text-sm'>THE 10 BEST Phuket Tours & Excursions</p>
      </div>
      <h1 className='text-primaryDesign font-bold text-4xl mt-12 mb-12 max-sm:text-2xl'>Explore all things to do in Phuket</h1>
      <div className='flex gap-6 max-xl:flex-col-reverse'>
        <div className='basis-1/4'>
          <SearchItem setContentSearch={setContentSearch} />
        </div>
        <div className='basis-3/4'>
          <ListItems data={data} currentPage={currentPage}
            paginate={paginate} setCurrentPage={setCurrentPage} />
        </div>
      </div>

    </div>
  )
}

export default ListPage