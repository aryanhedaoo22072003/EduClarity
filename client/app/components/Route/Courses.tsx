import { useGetUsersAllCoursesQuery } from '@/redux/features/courses/coursesApi';
import React from 'react'

type Props = {}

const Courses = (props: Props) => {
    const { data, isLoading } = useGetUsersAllCoursesQuery({});
    // const [courses, setCourses] = useState<any[]>([]);
    console.log(data)
  return (
    <div>Courses</div>
  )
}

export default Courses